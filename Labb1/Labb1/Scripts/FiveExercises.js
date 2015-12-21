// Task 1

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


// Task 2

var com;

var salesInput = document.getElementById("task2answer");
salesInput.addEventListener('click', displaySalary, false);

function calculateSalary() {
    var totalSales = document.getElementById("task2input").value;

    if (isNaN(totalSales)) {
        return "Sorry, digits only!";
    }
    if (totalSales <= 0) {
        return 15000;
    }
    else {
        return ((9 / 100) * totalSales) + 15000;
    }
}

function displaySalary() {
    com = calculateSalary();
    var commision = com - 15000;
    document.getElementById("task2answer").innerHTML = Math.round(com * 100) / 100 + " SEK, where the commision is " + Math.round(commision * 100) / 100 + " SEK (9%).";
}