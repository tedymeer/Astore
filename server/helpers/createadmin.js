const  Admin = require('../model/Admin');

module.exports = async () => {
  const newAdmin = new User({
    fullName: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    role:'admin'
  });
  await newAdmin.save();
  return;
};