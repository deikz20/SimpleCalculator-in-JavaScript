var operador = "";
var operandoA= "";
var operandoB="";
var reset = "";
var res = 0;
// numeros
var btn1 = document.getElementById("1")
var btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const btn6 = document.getElementById("6")
const btn7 = document.getElementById("7")
const btn8 = document.getElementById("8")
const btn9 = document.getElementById("9")
const btn0 = document.getElementById("0")
// operadores
let suma = document.getElementById("sum")
let resta = document.getElementById("res")
let multiplicacion = document.getElementById("mul")
let division = document.getElementById("div")
let btnEnviar = document.getElementById("enviar")
let btnLimpiar = document.getElementById("limp")
let btnReset = document.getElementById("reset")
//oepracion
var oepracion = document.getElementById("op")

btn1.addEventListener('click', ingreso1)
btn2.addEventListener('click', ingreso2)
btn3.addEventListener('click', ingreso3)
btn4.addEventListener('click', ingreso4)
btn5.addEventListener('click', ingreso5)
btn6.addEventListener('click', ingreso6)
btn7.addEventListener('click', ingreso7)
btn8.addEventListener('click', ingreso8)
btn9.addEventListener('click', ingreso9)
btn0.addEventListener('click', ingreso0)
btnLimpiar.addEventListener('click', clear)
suma.addEventListener('click', sumar)
resta.addEventListener('click', restar)
multiplicacion.addEventListener('click', multiplicar)
division.addEventListener('click', dividir)
btnReset.addEventListener('click', resetear)
btnEnviar.addEventListener('click', calcular)
function ingreso1 (){
    oepracion.textContent = oepracion.textContent + "1";
}
function ingreso2 (){
    oepracion.textContent = oepracion.textContent + "2";
}
function ingreso3 (){
    oepracion.textContent = oepracion.textContent + "3";
}
function ingreso4 (){
    oepracion.textContent = oepracion.textContent + "4";
}
function ingreso5 (){
    oepracion.textContent = oepracion.textContent + "5";
}
function ingreso6 (){
    oepracion.textContent = oepracion.textContent + "6";
}
function ingreso7 (){
    oepracion.textContent = oepracion.textContent + "7";
}
function ingreso8 (){
    oepracion.textContent = oepracion.textContent + "8";
}
function ingreso9 (){
    oepracion.textContent = oepracion.textContent + "9";
}
function ingreso0 (){
    oepracion.textContent = oepracion.textContent + "0";
}
function clear(){
    oepracion.textContent = "";
}

function sumar(){
    operandoA = oepracion.textContent;
    operador = "+";
    clear();
}
function multiplicar(){
    operandoA = oepracion.textContent;
    operador = "*";
    clear();
}
function restar(){
    operandoA = oepracion.textContent;
    operador = "-";
    clear();
}
function dividir(){
    operandoA = oepracion.textContent;
    operador = "/";
    clear();
}

function calcular (){
    operandoB = oepracion.textContent;
    resolver();
}
function resetear (){
    operandoA = 0;
    operandoB = 0;
    operador = "";
    oepracion.textContent = ""; 

}

function resolver (){
    switch (operador){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
            case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
            case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
            case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    oepracion.textContent = res;
    

}