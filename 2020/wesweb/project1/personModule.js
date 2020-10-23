const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    comment: String
  });
  
  const Person = mongoose.model('Person', personSchema);

exports.newPerson = (name, email, age, comment) => {
    var person = new Person({
        name: name, 
        email: email, 
        age: age,
        comment: comment
       })
       return person;
}