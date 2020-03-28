const mongoose=require('mongoose')
const Schema=mongoose.Schema


let Product=new Schema({
    name:{type:String,required:true},
   
    
    size:{type:Number,required:true},
    encoding:{type:String,required:true},
    tempFilePath:{type:String,required:true},
    truncated:{type:Boolean,required:true},
    mimetype:{type:String,required:true},
    md5:{type:String,required:true},
    
 

},
{
    collection:"mycollection"
})
module.exports=mongoose.model('Product',Product)