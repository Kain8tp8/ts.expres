import express from 'express'

const appi = express()

appi.get('/1',(request,response) =>{
    response.sendFile('index.html',{root:"./pages"})

})
appi.get('/2',(request,response) =>{
    response.sendFile('main.html',{root:"./pages"})

})
appi.get('/4',(request,response) =>{
    response.sendFile('master.html',{root:"./pages"})

})
appi.get('/3',(request,response) =>{
      response.sendFile('tp.html',{root:"./pages"})

})
appi.get('/5',(request,response) =>{
    response.sendFile('job.html',{root:"./pages"})

})

//0....9999
appi.listen(8888,()=>{
    console.log('server ishladi. http://localhost:8888');
    
})