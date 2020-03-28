const Product=require('../model/model')



module.exports={
    home:(req,res)=>{
        res.render('index')
    },
    upload:(req,res)=>{
        
        if(req.files){
            
           
            let file=req.files.myUpload
            console.log(file)

            for(var i=0;i<file.length;i++){
                var obj=file[i]
                console.log(obj)
                let data= new Product(obj)

                data.save().then(
                    result=>{
                        console.log("The file has been saved ")
                    }
                ).catch(err=>{
                    console.log('Error saving the File')
                })
            }

           

            let uploadpath=[];

            for(var i=0;i<file.length;i++){
                var name=file[i].name;
                console.log(name)
                uploadpath='./upload/'+name;
                console.log(uploadpath)


               
                    file[i].mv(uploadpath,function(err){
                        if(err){
                            console.log("The File Upload Failed")
                           
                           
                        }
    
                        else{
                            console.log("The File Upload succeeded")
                           
                           
                        }
                    })

                

              
            }

          
            
           


           
           
        }

        

        res.redirect('/')
        
         
    }
}