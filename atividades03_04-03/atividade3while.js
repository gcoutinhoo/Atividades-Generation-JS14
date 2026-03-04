import leia from 'readline-sync';

let num;
let maior = 0;
let menor = 0;
let continuar = true;

while(continuar){
    num = leia.questionInt("Digite uma idade: ");

    if(num < 0){
        break;
    }
    if(num <= 21){
        menor++;
    } else {
        maior++;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menor}`);
console.log(`Total de pessoas maiores de 21 anos: ${maior}`);