const mongoose = require('mongoose');
const User = require('../model/User');
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
      const admin = await User.findOne({role:'admin'});
      if (!admin) {
        console.log('Admin User not found. Making now');
        await createAdmin();
      }
    } catch (error) {
      console.log('MongoDB Connection Error: ', error);
    }
};