var inp;

var numberInput = document.getElementById("task1answer");
numberInput.addEventListener('mouseover', displaySqrt, false);

function calculatesqrt() {
    var number = document.getElementById("task1input").value;

    if (isNaN(number)) {
        return "Sorry, digits only!";
    }
    else {
        return Math.sqrt(number);
    }
}


function displaySqrt() {
    inp = calculatesqrt();
    document.getElementById("task1answer").innerHTML = inp;
}