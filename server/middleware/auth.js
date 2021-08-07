const jwt = require('jsonwebtoken');

module.exports.authenticate = async (req, res, next) => {
 //console.log("dhhdhahda")
  const token = req.cookies.JWTtoken;
  if(token){
    try{
      const user = jwt.verify("fef",process.env.JWT_SECRET);
      req.user = user;
      next();
    }
    catch(e){
      res.status(400).json({
        data:"you are not valid"
      })
    }
  }
}