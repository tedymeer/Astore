const jwt = require('jsonwebtoken');
const validator = require('validator');
const Product = require('../model/Admin');
const multer = require('multer');

module.exports.create = async (req,res) => {
  let product = {};
  product. = req.body.prodId ? req.body.prodId : ""
  product. = req.body.prodName ? req.body.prodName : ""
  product. = req.body.prodPrice ? req.body.prodPrice : ""
  product. = req.body.prodQty ? req.body.prodQty : ""
  product. = req.body.prodDesc ? req.body.prodDesc : ""
  product. = req.body.prodCategory ? req.body.prodCategory : ""
  product. = req.body.size ? req.body.size : ""
  product. = req.body.prod ? req.body.prod : ""

  if(validator.isEmpty(user.name) ||validator.isEmpty(user.password)){
		return res.status(401).json({ 
			status:401,
			data:"Name,email,role and password is required"
		})
	}
}