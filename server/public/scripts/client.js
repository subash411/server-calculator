$(document).ready(readyNow);
function readyNow () {
    console.log('On JQ');
    $('#equalBtn').on('click',onEquals);
    $('#clrBtn').on('click', clearInputs);
    $('plusBtn').on('click', function () {numInput.operator = '+'}); 
    $('minusBtn').on('click', function () {numInput.operator = '-'}); 
    $('divideBtn').on('click', function () {numInput.operator = '/'});
    $('multiplyBtn').on('click', function () {numInput.operator = '*'}); 
}

function onEquals(event){
    event.preventDefault();
    numInput.number1 = $('#firstNumber').val('');
    numInout.number2 = $('#secondeNumber').val('');
    clearInputs();
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: numInp,
    }).then((response) => {
        render ();
        console.log('Number submitted', response);
    });
}

