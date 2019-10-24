const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode } = require("querystring");
//const { updateDb } = ("./myModule");

var { mail } = require("./sendmail");
var mongo = require('mongodb');

const sendFile = function (response, status, type, filePath) {
    response.writeHead(status, { "Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer(function (request, response) {
    if (request.method === "POST") {
        let body = "";
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            const { fname, lname } = decode(body);
            console.log(body);
            //updateDb(email, name, message);
            console.log(`fname: ${fname}, lname: ${lname}`);
        });
    }

    switch (request.url) {
        case "/":
            return sendFile(response, 200, "text/html", "./client/Labb.html");
        case "/style.css":
            return sendFile(response, 200, "text/css", "./client/style.css");
        case "/kris.jpg":
            return sendFile(response, 200, "image/jpeg", "./client/kris.jpg");
        case "/form":
            return sendFile(response, 200, "text/html", "./client/form.html");
        case "/download":
            return sendFile(response, 200, "text/bat", "./server/test.bat"); //Funkar Ej pga fil format tror jag(bat).
        default:
            return sendFile(response, 200, "text/html", "./client/404.html");
    }
}).listen(8080);

console.log("Website running on port 8080!");