const http=require('http');
http.createServer((req,resp)=>{
    resp.write("this is anil sidhu");
    resp.end("hello");
}).listen(4800)

