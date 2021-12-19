const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app use

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 5000;
app.listen(port, () =>{
console.log('I\'m listening')
});

