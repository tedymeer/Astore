const Admin = require('../model/Admin');

module.exports = async () => {
  const newAdmin = new Admin({
    fullName: 'Ahmed Mir',
    email: 'admin@admin.com',
    password: 'admin',
    role:'admin'
  });
  await newAdmin.save();
  return;
};