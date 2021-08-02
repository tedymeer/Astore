const User = require('../model/User');

module.exports = async () => {
  const newAdmin = new User({
    fullName: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    role:'admin'
  });
  await newAdmin.save();
  return;
};