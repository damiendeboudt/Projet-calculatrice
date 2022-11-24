
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");
let number8 = document.getElementById("number8");
let number9 = document.getElementById("number9");
let number0 = document.getElementById("number0");
let numberPlus = document.getElementById("number+");
let numbermoins = document.getElementById("number-");
let numberEgal = document.getElementById("number=");
let numberModulo = document.getElementById("number%");
let numberC = document.getElementById("numberC");
let numberMulti = document.getElementById("number*");

let result = document.getElementById("result");

number1.addEventListener("click", function () {
    let chiffre = document.getElementById("number1");
    //let result = document.getElementById("result");
    result.innerText += chiffre.value = 1;
})
number2.addEventListener("click", function () {
    let chiffre = document.getElementById("number2");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 2;
})
number3.addEventListener("click", function () {
    let chiffre = document.getElementById("number3");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 3;
})
number4.addEventListener("click", function () {
    let chiffre = document.getElementById("number4");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 4;
})
number5.addEventListener("click", function () {
    let chiffre = document.getElementById("number5");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 5;
})
number6.addEventListener("click", function () {
    let chiffre = document.getElementById("number6");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 6;
})
number7.addEventListener("click", function () {
    let chiffre = document.getElementById("number7");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 7;
})
number8.addEventListener("click", function () {
    let chiffre = document.getElementById("number8");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 8;
})
number9.addEventListener("click", function () {
    let chiffre = document.getElementById("number9");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 9;
})
number0.addEventListener("click", function () {
    let chiffre = document.getElementById("number0");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = 0;
})
numberPlus.addEventListener("click", function () {
    let chiffre = document.getElementById("number+");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = "+";
})
numbermoins.addEventListener("click", function () {
    let chiffre = document.getElementById("number-");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = "-";
})
numberModulo.addEventListener("click", function () {
    let chiffre = document.getElementById("number%");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = "%";
})
numberMulti.addEventListener("click", function () {
    let chiffre = document.getElementById("number*");
    let result = document.getElementById("result");
    result.innerText += chiffre.value = "*";
})
numberC.addEventListener("click", function () {
    let chiffre = document.getElementById("numberC");
    let result = document.getElementById("result");
    result.innerText = chiffre.value = "";
})
numberEgal.addEventListener("click", function () {
    //let chiffre = document.getElementById("number=").value;
    let result = document.getElementById("result");
    result.innerText = eval(result)
})







