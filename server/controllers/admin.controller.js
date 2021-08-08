const jwt = require('jsonwebtoken');
const validator = require('validator');
const Admin = require('../model/Admin');
module.exports.login = async (req,res) => {
  let admin = {};
  admin.username = req.body.username;
  admin.password = req.body.password;
  console.log(admin);
  if(validator.isEmpty(admin.username) ||validator.isEmpty(admin.password)){
		return res.status(401).json({ 
			status:401,
			data:"Name,email,role and password is required"
		})
	}
  const data = await Admin.findOne({email:admin.username})
  console.log(data);
  if(data){
//    console.log("sdhshhfs");
    const token = await jwt.sign(data,process.env.JWT_SECRET);
    //console.log(token);
    res.cookie("JWTtoken", token, {
      httpOnly:true 
    }).send(token);
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
  let admin = {};
  admin.username = req.body.username;
  admin.password = req.body.password;
  const id = req.body.id;
  
  if(validator.isEmpty(admin.username) ||validator.isEmpty(admin.password)){
		return res.status(401).json({ 
			status:401,
			data:"Name,email,role and password is required"
		})
	}
  try{
     await Admin.findByIdAndupdate(id,admin);
    res.json({
      status:200,
      data:data
    })
  }
  catch(e){
    console.log("the error in updating admin",e);
  }
}