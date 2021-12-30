const app=require('./app');
const cloudinary=require('cloudinary');
const {connectDatabase}=require('./db/coon');


connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{

console.log(`serverr is running at port ${process.env.PORT} `)

})