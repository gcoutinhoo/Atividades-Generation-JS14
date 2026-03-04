import leia from 'readline-sync';

let numero;
let somaP = 0;

do{
    let numero = leia.questionInt("Digite um número: ")

    if(numero === 0){
        break;
    }
    if(numero > 0){
        somaP += numero;
    }
}while(numero !== 0);

console.log(`A soma dos números positivos é: ${somaP}`);
