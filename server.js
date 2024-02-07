console.log ('Hello')
const express = require('express')
const mongoClient = require('mongodb').mongoClient
const connectionString = 'mongodb+srv://lutfala:<a6h1wULklLHrXxAd>@cluster0.i7bimrk.mongodb.net/?retryWrites=true&w=majority'
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect(connectionString, (err, client) => {

    if (err) return console.error(err)
    console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log ('Listening on 3000')

})
app.get('/', (req, res) => {
    res.sendFile (__dirname + '/index.html')

})

app.post("/quotes", (req, res)=>{
    console.log(req.body)
})