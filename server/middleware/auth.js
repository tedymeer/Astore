const jwt = require('jsonwebtoken');

module.exports.authenticate = async (req, res, next) => {
 //console.log("dhhdhahda")
  const token = req.cookies.JWTtoken;
  if(token){
    const user = jwt.verify(token,process.env.JWT_SECRET);
    req.user = user;
    next();
  }
}