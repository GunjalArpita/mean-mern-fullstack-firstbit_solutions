const http=require('http')
require('dotenv').config()
const fs=require('fs')
console.log(process.env.PORT)
http.createServer(function(req,res)       //browser -localhost:8080 .
{   
    res.writeHead(200,{'content-type':'text/html'})
    const url=req.url
    console.log(url)
    if(url=='/')
    {
    fs.readFile('demotext.text',(err,data)=>
    {
        console.log(data.toString())
        res.write(data)
    })
    }
    else if(url=='/about')
   {
    res.write('you are on page')
   }

    res.write("hello all from our new server")
    // res.write(req.url)
    res.end()
}).listen(process.env.PORT)
