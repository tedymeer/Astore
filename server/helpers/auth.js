const jwt = require('jsonwebtoken');

module.exports.authenticate = async () => {

}
module.exports.check = async (req, res, next) => {
 console.log("dhhdhahda")
  const token = req.cookies.JWTtoken;
  if(token){
    console.log(token);
  }
}