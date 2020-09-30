// npm init -y
// npm i express mongoose
// npm i --save-dev nodemon

const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + '\\client\\'

app.use(express.json())
app.use(express.request())

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/style', (req, res) => res.sendFile(clientDir + 'style.css'))
app.get('/apa.jpg', (req, res) => res.sendFile(clientDir + 'apa.jpg'))

app.post('/', function(req, res) {
    console.log(req.body)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))