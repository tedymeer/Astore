const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const webSchema = new mongoose.Schema({
	username: String,
	password: String
})
webSchema.pre('save', function (next) {
	if (this.isModified('password')) this.password = bcrypt.hashSync(this.password, 10);
	next();
});
webSchema.pre(['updateOne', 'findOneAndUpdate'], function (next) {
	const updateObj = this.getUpdate();
	if (updateObj.password) this._update.password = bcrypt.hashSync(updateObj.password, 10);
	next();
});
webSchema.methods.isPasswordCorrect = function (password) {
	const isMatch = bcrypt.compareSync(password, this.password);
	return isMatch;
};
let Admin = new mongoose.model('admin', webSchema)
module.exports = Admin