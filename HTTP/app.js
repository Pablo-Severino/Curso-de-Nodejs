var http = require ('http');

http.createServer(function (req, res){
        res.end("Hello World! Welcome it Website.");
}).listen(8081);

console.log("O Sevidor Aberto!");