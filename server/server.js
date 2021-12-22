const express = require('express');
const app = express ();
app.use(express.static('server/public'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Global array to hold the data

let calculation = [];
let Total = 0;

app.post("/calculator", (req, res) => {
  console.log("in POST /calculator", req.body);
  
  let finalObj = {
    firstNum: 0,
    secondNum: 0,
    operators: "+",
    total: 0,
  };

  function math() {
    console.log("in math", Number(req.body.firstNum));
    if (req.body.operators === "+") {
      Total = Number(req.body.firstNum) + Number(req.body.secondNum);
    } else if (req.body.operators === "-") {
      Total = Number(req.body.firstNum) - Number(req.body.secondNum);
    } else if (req.body.operators === "/") {
      Total = Number(req.body.firstNum) / Number(req.body.secondNum);
    } else if (req.body.operators === "*") {
      Total = Number(req.body.firstNum) * Number(req.body.secondNum);
    }
  }
  math();

  finalObj.firstNum = req.body.firstNum;
  finalObj.secondNum = req.body.secondNum;
  finalObj.operators = req.body.operators;
  finalObj.total = Total;

  calculation.push(finalObj);

  // Send back  status
  res.sendStatus(201);
});

app.get("/calculation", (req, res) => {
  console.log("in GET /calculation");
  res.send(calculation);
});

app.get("/result", (req, res) => {
  console.log("in GET /result");
  res.send(result);
});

const port = 5000;
app.listen(port, () => {
  console.log("I'm listening");
});