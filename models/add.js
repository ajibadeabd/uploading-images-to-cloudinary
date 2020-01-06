const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//create schema
const ItemSchema= new Schema({
// _id:{
//     type: Schema.Types.ObjectId,
//     ref:'users'
// },
item:{
   type:String,
   required:true
},
user_id:{
    type: String,
    required:true
},

date:{
    type:Date,
    default:Date.now
}}
);
mongoose.model('items',ItemSchema);