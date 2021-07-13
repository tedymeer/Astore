const passport = require('passport')
module.exports.ensureAuthenticated = (req, res, next) => {
  
    next();
  } else {
    res.json({
      status:401,
      message:"not authenticated"
    })
  }
};