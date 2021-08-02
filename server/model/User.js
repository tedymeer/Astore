const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create User Schema
const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type:String,
      unique:true
    },
    password: {
      type:String,
      unique:true
    },
    role: String
  },
  { timestamps: true }
);

// Encrypt the Password before Saving to DB
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;
  next();
});

// Encrypt the Password before Updating
userSchema.pre('findOneAndUpdate', async function (next) {
  const updatedInfo = this.getUpdate();
  if (updatedInfo.password) {
    this._update.password = await bcrypt.hash(updatedInfo.password, 10);
  }
  next();
});

// Check if the password is correct
userSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

module.exports = mongoose.model('user', userSchema);