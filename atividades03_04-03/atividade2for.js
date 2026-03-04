import leia from 'readline-sync';

let num;
let par = 0;
let impar = 0;

for(let contador = 1; contador <= 10; contador++){
    num = leia.questionInt(`Digite o ${contador}º número: `);

    if(num % 2 === 0){
        par++;
    } else {
        impar++;
    }
}

console.log(`Total de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`);