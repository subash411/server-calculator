$(document).ready(onReady);
function onReady(){
    console.log('it is ready');

    $("button").on("click", function (event) {
        event.preventDefault();
        operator = $(this).text();
        console.log(operator);
      });
      $("#calcsForm").on("submit", addCalculation);

    refresh();
};
function addCalculation(event) {
  event.preventDefault();


  let calculator = {
    firstNum: $("#firstInput").val(),
    secondNum: $("#secondInput").val(),
    operators: operator,
    total: 0,
  };
  console.log("calculator is ", calculator);

  
  $.ajax({
    method: "POST",
    url: "/calculator",
   
    data: calculator,
  }).then((response) => {
    console.log("POST response", response);

    
    refresh();
  });
}

let operator;
function ClearFields() {
  $("#firstInput").val("");
  $("#secondInput").val("");
}


function refresh() {
 
  let ajaxOptions = {
    method: "GET",
    url: "/calculation",
  };
  $.ajax(ajaxOptions).then((response) => {
    console.log("AJAX request complete!", response);
    render(response);
  });

  
}

function render(calculation) {
  // state to the DOM
  $("#answers").empty();
  for (let result of calculation) {
    $("#answers").append(`
            <li>
                ${result.firstNum} ${result.operators}
                ${result.secondNum} = ${result.total}
                <div>
                
                </div>
            </li>
        `);
    $("#Result").text(result.total);
  }
}

function totalRender(total) {
  $("#Result").text(`${total}`);
}

function total() {
  let ajax = {
    method: "GET",
    url: "/result",
  };
  $.ajax(ajax).then((response) => {
    console.log("AJAX request complete!", response);
    totalRender(response);

   
  });

}
