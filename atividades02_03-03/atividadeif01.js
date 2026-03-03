import leia from 'readline-sync';

let numA, numB, numC;

numA = leia.questionInt('\nDigite o número A: ');
numB = leia.questionInt('\nDigite o número B: ');
numC = leia.questionInt('\nDigite o número C: '); 

if(numA + numB > numC){
    console.log(`\n${numA} + ${numB} = ${numA + numB} > ${numC}\nA Soma de A + B é Maior do que C`);
}else if(numA + numB < numC){
    console.log(`\n${numA} + ${numB} = ${numA + numB} < ${numC}\nA Soma de A + B é Menor do que C`);
}else{
    console.log(`\n${numA} + ${numB} = ${numA + numB} = ${numC}\nA Soma de A + B é Igual a C`);
}
