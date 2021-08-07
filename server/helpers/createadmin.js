const  Admin = require('../model/Admin');

module.exports = async () => {
  const newAdmin = new Admin({
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
  });
  await newAdmin.save();
  return;
}; 