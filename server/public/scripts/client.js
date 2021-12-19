$(document).ready(onReady);
function onReady () {
    console.log('On JQ');
    $('#equalBtn').on('click',onEquals);
    $('#clrBtn').on('click', clearInputs);
    $('plusBtn').on('click', function () {numInput.operator = '+'}); 
    $('minusBtn').on('click', function () {numInput.operator = '-'}); 
    $('divideBtn').on('click', function () {numInput.operator = '/'});
    $('multiplyBtn').on('click', function () {numInput.operator = '*'}); 
}

