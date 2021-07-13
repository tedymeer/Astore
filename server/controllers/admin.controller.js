const validator = require('validator')
const Admin = require("../model/Admin")
const jwt = require('jsonwebtoken')
module.exports.login = async (req, res) => {
	let admin = {}
	admin.username = req.body.username;
	admin.password = req.body.password;
	console.log(req.body);
	if(validator.isEmpty(admin.username) || validator.isEmpty(admin.password)){
		res.json({
			status:404,
			data:"Name and password is required"
		})
	}
	const data = await Admin.find({username:admin.username})	
	console.log(data[0]);
	let user = data[0];
	if(user){
		jwt.sign({user},'jwt_secret', (err,token) => {
			console.log(err)
			res.json({
				status:200,
				data:token
			})	} 
		)
	}
	
};
module.exports.register = async (req,res) => {
	let admin = {}
	console.log(req.body);
	admin.username = req.body.username;
	admin.password = req.body.password;
	if(validator.isEmpty(admin.username) ||validator.isEmpty(admin.password)){
		res.json({
			status:404,
			data:"Name and password is required"
		})
	}
	let adminCollection = new Admin(admin) 
	await adminCollection.save()
	 res.json({
		status:200,
		data:"true"
	})
};