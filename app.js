const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')
const app = express();
const multer= require('multer')
const upload=require("./multer")
const cloudinary=require("./cloudinary")
const fs =require("fs")
//set storage engine



//handle bars middlewares
app.engine('handlebars',exphbs({
   
    
}));
app.set('view engine','handlebars');

//static folder
app.use(express.static(path.join(__dirname,'public')));

//INDEX ROUTE
app.get('/',(req,res,next) => {
    const title = 'just getting started';

    res.render('layouts/main')
});

// about route
app.get('/about',(req,res,next) => {
    res.render('about')
});

app.post('/upload-images',upload.array('image'),async (req,res)=>{
        const uploader =  async (path)=> await cloudinary.uploads(path,'Images')
        // if(req.method==='POST')
        // {
            const urls =[]
                const files = req.files
                for(file of files){
                    const {path}=file
                    const newPath= await uploader(path)
                    urls.push(newPath)
                    fs.unlinkSync(path)
                }
        res.status(200).json({
            message:'images uploaded successfully',
            data:urls
        })
        // }
});

const port =process.env.PORT || 4000;

app.listen(4000,(req,res,next) => {
    console.log(`server running at port ${port}`)
});