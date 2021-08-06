const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create admin Schema
const adminSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type:String,
      unique:true
    },
    password: {
      type:String,
      unique:true
    }
  },
  { timestamps: true }
);

// Encrypt the Password before Saving to DB
adminSchema.pre('save', async function (next) {
  const admin = this;
  if (!admin.isModified('password')) return next();

  const hash = await bcrypt.hash(admin.password, 10);
  this.password = hash;
  next();
});

// Encrypt the Password before Updating
adminSchema.pre('findOneAndUpdate', async function (next) {
  const updatedInfo = this.getUpdate();
  if (updatedInfo.password) {
    this._update.password = await bcrypt.hash(updatedInfo.password, 10);
  }
  next();
});

// Check if the password is correct
adminSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

module.exports = mongoose.model('admin', adminSchema);  