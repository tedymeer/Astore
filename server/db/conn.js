const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ecommerce",{  useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection established ..."))
.catch((err) =>console.log(err));
 