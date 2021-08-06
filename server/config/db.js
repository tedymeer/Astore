const mongoose = require('mongoose');
const Admin = require('../model/Admin');

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
    } 
    catch (error) {
      console.log('MongoDB Connection Error: ', error);
    }
};