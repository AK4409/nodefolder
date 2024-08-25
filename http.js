const http = require("http");
const {formatDate} = require("./helper/helper")

function serverInitiliaze(req,res) {
    let date = formatDate();
    res.writeHead("200",{"Content-Type":"text/html"});
    res.end(`Today current date is :${date}`);
    // if (req.method == 'POST' && req.url == '/') {
      
    // } else {
    //     res.writeHead("400",{"Content-Type":"text/html"});
    //     res.end("Unauthorized");
    // }
 
}
http.createServer(serverInitiliaze).listen(5000);