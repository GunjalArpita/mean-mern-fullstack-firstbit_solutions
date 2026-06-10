const server=require('server')
require('dotenv').config()
console.log(process.env.PORT)
server.createServer(function(req,res)       //browser -localhost:8080 .
{   
    fs.readFile('demotext.text',(err,data)=>
    {
        console.log(data.toString())
        res.write(data.toString())
    })
    res.writeHead(200,{'content-type':'text/html'})
    res.end()
}).listen(process.env.PORT)