import leia from "readline-sync";

let num1;
let num2;
let operador;

console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

num1 = leia.questionFloat("\nDigite o primeiro número: ");
num2 = leia.questionFloat("Digite o segundo número: ");
operador = leia.question("Operação: ");

switch(operador){
    case "1":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "2":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "3":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "4":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Operação inválida!");
}
