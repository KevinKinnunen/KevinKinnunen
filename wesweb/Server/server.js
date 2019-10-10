const { createServer } = require("http");
const { createReadStream } = require("fs");
var { mail } = require("./sendmail");

const sendFile = function(response, status, type, filePath) {
    response.writeHead(status, { "Content-Type": type});
    createReadStream(filePath).pipe(response);
};

createServer(function(request, response) {

    switch (request.url) {
        case "/":
            return sendFile(response, 200, "text/html", "./client/Labb.html");
        case "/style.css":
            return sendFile(response, 200, "text/css", "./client/style.css");
        case "/kris.jpg":
            return sendFile(response, 200, "image/jpeg", "./client/kris.jpg");
        default: 
            return; 
    }
}).listen(8080);

console.log("Website running on port 8080!");