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

exports.mail = function () {

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}