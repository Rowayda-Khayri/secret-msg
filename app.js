const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var secret = "Hello Node :)"

app.listen(5678, ()=>{
    console.log('Listening on port 5678')
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/get_messages', (req, res)=>{
    res.send(secret)
})