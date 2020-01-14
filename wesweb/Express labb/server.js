const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const myModule = require('./myModule');

app.use(bodyParser.urlencoded());

const port = 3000;
const clientDir = __dirname + '\\client\\';

const bcrypt = require('bcryptjs');

app.use(express.json()); 

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
      if (await crypt.compare(req.body.password, user.password)) {
          req.send('Success')
      } else {
        req.send('Not Allowed')
      }
    } catch {
        res.status(500).send();
    }
})

app.post('/', (req, res) => {

    let fname = req.body.fname;
    let lname = req.body.lname;

    myModule.updateDb(fname, lname);

    res.sendFile(clientDir + 'labb.html');
  })

app.get('/', (req, res) => {
  res.sendfile(clientDir + 'labb.html');
})

app.get('/Contact', (req, res) => {
    res.sendfile(clientDir + 'form.html');
})

app.get('/kris.jpg', (req, res) => {
    res.sendfile(clientDir + 'kris.jpg');
})

app.get('/style.css', (req, res) => {
    res.sendfile(clientDir + 'style.css');
})

app.get('*', (req, res) => {
    res.sendfile(clientDir + '404.html');
})

app.listen(port, () => console.log(`Apps listening to port: 3000!`));