let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')


let app = express()

app.use(express.static('public'))


app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})





app.listen(3001,()=>{
    console.log('server is listening on port 3001')
})