const jwt = require('jsonwebtoken');

module.exports.authenticate = async (req, res, next) => {
 //console.log("dhhdhahda")
  const token = req.cookies.JWTtoken;
  if(token){
    try{
      const user = jwt.verify(token,process.env.JWT_SECRET);
      req.user = user;
      next();
    }
    catch(e){
      res.status(400).json({
        data:"you are not valid"
      })
    }
  }
  else{
    res.status(400).json({
      data:"you should have a json web token"
    })
  }
}