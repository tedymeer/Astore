const mongoose = require('mongoose');
const Admin = require('../model/Admin');
const createAdmin = require('../helpers/createadmin');

module.exports.connect = async () => {
    try {
      // Connect to MongoDB
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
      // mongoose.set('debug', true);
      console.log('MongoDB Connected...');
      const admin = await Admin.find();
      if (!admin[0]) {
        console.log('Admin User not found. Making now');
        await createAdmin();
      }
    } 
    catch (error) {
      console.log('MongoDB Connection Error: ', error);
    }
};