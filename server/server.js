const express = require('express');
const app = express ();
app.use(express.static('server/public'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//listen to 5000

const PORT = 5001;
app.listen(PORT, () =>{
console.log('I\'m listening');
});

let calculation = [];

app.post('/calculation', (req, res) => {
const object = req.body;
let operator = object.operator;
let answer = 0;
let number1 = Number(object.number1);
let number2 = Number(object.number2);
console.log('object');
if (operator === '+'){
    answer = number1+number2;

} else if (operator === "-") {
    answer = number1 - number2;

  } else if (operator === "/") {
    answer = number1 * number2;

  } else if (operator === "*") {
    answer = number1 / number2;

  }
  
  

})


