//Setup empty JS object to act as endpoint for all routes
nlpData = {};

var path = require('path')

const dotenv = require('dotenv');
dotenv.config();

var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
console.log(`Your API key is ${process.env.API_KEY}`);

const express = require('express')

//Set up instance of an app
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

//*Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

//Initialize route
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
});



//Post route
app.post('/analysis', addData);
    
function addData(req, res){
    textapi.sentiment({
        mode: document
    })
    newData = {
        polarity: req.body.polarity,
        subjectivity: req.body.subjectivity,
        text: req.body.text
    }
    nlpData.push(newData);
    res.send(nlpData);
    console.log(body);
}
