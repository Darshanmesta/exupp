const express=require('express')
const app= express()
const mongoose=require('mongoose')
const upload=require('express-fileupload')
const config=require('./config/db')

mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    myRes=>{
        console.log('Mongoose connection successful')
    },
    err=>{
        console.log("Mongoose connection Failed")
    }
)


app.set('views','./views')
app.set('view engine','ejs')

app.use(upload())
app.use('/',require('./route/route'))

app.listen(3400,function(){
    console.log("The server is up and running at 3400")
})