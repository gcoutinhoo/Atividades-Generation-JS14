const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat('\nSalário: ');
abono = leia.questionFloat('\nAbono: ');

novoSalario = salario + abono;

console.log(`\nNovo Salário: ${novoSalario.toFixed(2)}`);