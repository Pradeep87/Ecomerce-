
const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const bodyparser=require('body-parser');
const fileUpload = require("express-fileupload");
const path=require('path')

const errorMiddelware=require('./middelware/error');


if(process.env.NODE_ENV !== "PRODUCTION"){
  require('dotenv').dotenv.config();

}





app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileUpload());




//routes imports 
const products=require("./Routes/ProductsR");
const user=require('./Routes/userRoute');
const order=require('./Routes/OrderRoute');
const payment=require('./Routes/paymentR');



app.use('/api/v1',products);

app.use('/api/v1',user);
app.use('/api/v1',order);
app.use('/api/v1',payment);

app.use(express.static(path.join(__dirname,"../frontend/build")))


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });




// middeleware for error
app.use(errorMiddelware);


module.exports=app;