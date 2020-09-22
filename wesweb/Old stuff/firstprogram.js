var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
var txt = "";
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kevin.schwetzkinnunen@elev.ga.ntig.se',
        pass: ''
    }
});

var mailOptions = {
    from: 'kevin.schwetzkinnunen@elev.ga.ntig.se',
    to: 'niklas.hjelm@ga.ntig.se',
    subject: 'Skickar Email Med Node.js',
    text: 'Hej Niklas! //Skickat ifrån Node.js'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
//Fire the "scream" event:
eventEmitter.emit('scream');

rs.on('open', function(){
    txt = "The file is open";
    console.log('The file is open');
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end(txt);
}).listen(8080);


