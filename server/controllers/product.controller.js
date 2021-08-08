const validator = require('validator');
const Product = require('../model/Product');
const multer = require('multer');
module.exports.create = async (req,res) => {
  
  console.log(req.user);
  const token = req.cookies;
  let product = {};

  product.Id = req.body.prodId ? req.body.prodId : ""
  product.Name = req.body.prodName ? req.body.prodName : ""
  product.Price = req.body.prodPrice ? req.body.prodPrice : ""
  product.Quantity = req.body.prodQty ? req.body.prodQty : ""
  product.Description = req.body.prodDesc ? req.body.prodDesc : ""
  product.Category = req.body.prodCategory ? req.body.prodCategory : ""
  product.Size = req.body.size ? req.body.size : ""
  product.Images = req.file ? req.file : ""

  if(validator.isEmpty(product.Id) ||validator.isEmpty(product.Name) ||validator.isEmpty(product.Price) ||validator.isEmpty(product.Quantity) ||validator.isEmpty(product.Description) ||validator.isEmpty(product.Size)||validator.isEmpty(product.Category)||validator.isEmpty(product.Images)){
		return res.status(401).json({ 
			status:401,
			data:"Id,Name,Price,Quantity,Description,Size,Category and Images are required"
		})
	}
  try{
    let productCollection = new Product(product)
    await productCollection.save();
  }
  catch(e){
    console.log("error in saving products is",e);
  }
}
module.exports.delete = async (req,res) => {
  
  const Id = req.params.id;
  try{
    await Product.findByIdAndDelete(id);
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
    const data = await Product.find();
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
  
  let product = {};

  const Id = req.body.id ? req.body.id : ""
  product.Id = req.body.prodId ? req.body.prodId : ""
  product.Name = req.body.prodName ? req.body.prodName : ""
  product.Price = req.body.prodPrice ? req.body.prodPrice : ""
  product.Quantity = req.body.prodQty ? req.body.prodQty : ""
  product.Description = req.body.prodDesc ? req.body.prodDesc : ""
  product.Category = req.body.prodCategory ? req.body.prodCategory : ""
  product.Size = req.body.size ? req.body.size : ""
  product.Images = req.file ? req.file : ""

  if(validator.isEmpty(product.Id) ||validator.isEmpty(product.Name) ||validator.isEmpty(product.Price) ||validator.isEmpty(product.Quantity) ||validator.isEmpty(product.Description) ||validator.isEmpty(product.Size)||validator.isEmpty(product.Category)||validator.isEmpty(product.Images)){
		return res.status(401).json({ 
			status:401,
			data:"Id,Name,Price,Quantity,Description,Size,Category and Images are required"
		})
	}
  await Product.findByIdAndUpdate(Id,product)
}