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

//Task 3

var time;

var minutes = document.getElementById("task3answerMinutes");
minutes.addEventListener('click', convertTimeToMinutes, false);

var seconds = document.getElementById("task3answerSeconds");
seconds.addEventListener('click', convertTimeToSeconds, false);

function convertTimeToMinutes() {
    var inputHours = document.getElementById("task3input").value;

    if (isNaN(inputHours)) {
        return "Sorry, digits only!";
    } else {
        return document.getElementById("task3answerMinutes").innerHTML = inputHours * 60;
    }
}

function convertTimeToSeconds() {
    var inputHours = document.getElementById("task3input").value;

    if (isNaN(inputHours)) {
        return "Sorry, digits only!";
    } else {
        return document.getElementById("task3answerSeconds").innerHTML = inputHours * 3600;
    }
}

//Task 4


var average = document.getElementById("task4answerAverage");
average.addEventListener('click', calculateAverage, false);

var sum = document.getElementById("task4answerSum");
sum.addEventListener('click', calculateSum, false);

function calculateAverage() {

    var noOne = document.getElementById("task4inputOne").value;
    var noTwo = document.getElementById("task4inputTwo").value;
    var noThree = document.getElementById("task4inputThree").value;

    return document.getElementById("task4answerAverage").innerHTML = (Number(noOne) + Number(noTwo) + Number(noThree)) / 3;

}

function calculateSum() {

    var noOne = document.getElementById("task4inputOne").value;
    var noTwo = document.getElementById("task4inputTwo").value;
    var noThree = document.getElementById("task4inputThree").value;

    return document.getElementById("task4answerSum").innerHTML = Number(noOne) + Number(noTwo) + Number(noThree);

}

//Task 5

var dollar = document.getElementById("task5answerUSD");
dollar.addEventListener('click', changeToUSD, false);

var pound = document.getElementById("task5answerPound");
pound.addEventListener('click', changeToPound, false);

function changeToUSD() {
    var sek = document.getElementById("task5input").value;

    if (isNaN(sek)) {
        return "You can´t change that, insert a number instead!";
    } else {
        return document.getElementById("task5answerUSD").innerHTML = sek * 6;
    }
}

function changeToPound() {
    var sek = document.getElementById("task5input").value;

    if (isNaN(sek)) {
        return "You can´t change that, insert a number instead!";
    } else {
        return document.getElementById("task5answerPound").innerHTML = sek * 12;
    }
}