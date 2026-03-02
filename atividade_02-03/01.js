const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat('Digite o salario do funcionario: ');
abono = leia.questionFloat('Digite o valor do abono: ');

novoSalario = salario + abono;

console.log(`O novo salario do funcionario é: ${novoSalario.toFixed(2)}`);