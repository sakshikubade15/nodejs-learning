const http=require("http");
const fs=require("fs");

const myServer=http.createServer( ( req,res) =>{
    // console.log('new request recieved');
    // console.log(req);
    const log=`${Date.now()}:New Request Recieved\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
            res.end('hello from server again');


      });
});

myServer.listen(8001,()=>console.log('server started!'));
