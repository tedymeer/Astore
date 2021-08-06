const jwt = require('jsonwebtoken');
const validator = require('validator');
const Admin = require('../model/Admin');
module.exports.login = async (req,res) => {
  let user = {};
  user.name = req.body.adminusername;
  user.password = req.body.adminpassword;
  console.log(user);
  if(validator.isEmpty(user.name) ||validator.isEmpty(user.password)){
		return res.status(401).json({ 
			status:401,
			data:"Name,email,role and password is required"
		})
	}
		
  const data = await Admin.findOne({password:user.password})
  if(data){
    console.log("sdhshhfs");
    const token = await jwt.sign(data,process.env.JWT_SECRET);
    res.cookie("JWTtoken", token,{
      httpOnly:true
    });
  }
  else{
    res.status(400).json({
      data:"there is no admin of this given information"
    })
  }
}
module.exports.delete = async (req,res) => {
    const id = req.params.id;
    
    try{
      await Admin.findByIdAndDelete(id);
      res.json({
        status:200
      })
    }
    catch(e){
      console.log("the error in deleting admin",e);
    }
}
module.exports.list = async (req,res) => {
  try{
    const data = await Admin.find();
    res.json({
      status:200,
      data:data
    })
  }
  catch(e){
    console.log("the error in deleting admin",e);
  }
}
module.exports.update = async (req,res) => {
  let user = {};
  user.name = req.body.adminusername;
  user.password = req.body.adminpassword;
  const id = req.body.id;
  
  if(validator.isEmpty(user.name) ||validator.isEmpty(user.password)){
		return res.status(401).json({ 
			status:401,
			data:"Name,email,role and password is required"
		})
	}
  try{
     await Admin.findByIdAndupdate(id,user);
    res.json({
      status:200,
      data:data
    })
  }
  catch(e){
    console.log("the error in updating admin",e);
  }
}