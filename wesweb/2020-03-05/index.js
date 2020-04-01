const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + '\\client\\'
const users = []
const bcrypt = require('bcryptjs')
const UserModule = require('./UserModel')

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})



app.get('/img', (req, res) => {
  res.sendFile(clientDir + 'img.png')
})


app.post('/action_page', function (req, res) {
  console.log(req.body)
  let fname = req.body.fname
  let lname = req.body.lname
  console.log("name: " + fname + "efternamn: " + lname)
  res.send('POST request to the homepage')
})


app.get('/users', async (req, res) => {
  let users = await UserModule.getUsersList()
  res.json(users)
})



app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    UserModule.registerUser(req.body.name, hashedPassword)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})



app.post('/users/login', async (req, res) => {
  const user = UserModule.findUser(req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)){
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))