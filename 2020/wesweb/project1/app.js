// npm init -y
// npm i express mongoose
// npm i --save-dev nodemon

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  const user = mongoose.model('Users', userSchema);  

  var Kevin = new user({name: 'Kevin', email: 'k@k.k', age: 18})
  var Amanda = new user({name: 'Amanda', email: 'a@a.a', age: 17})
  var Jesper = new user({name: 'Jesper', email: 'j@j.j', age: 19})

  Kevin.save()
  Amanda.save()
  Jesper.save()