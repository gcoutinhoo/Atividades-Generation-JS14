import * as readlineSync from "readline-sync";

const numero = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let encontrado: boolean = false; // variavel para verificar se o numero foi encontrado ou não
let loc = readlineSync.questionInt(`Digite o número que você deseja encontrar: `);

for (let num of numero){
        if (num == loc){
            encontrado = true;
            console.log(`O número ${loc} foi encontrado!`); // se o numero for encontrado, exibe a mensagem
        }
}
if (encontrado == false){ // se o numero não for encontrado, exibe a mensagem
console.log(`O número ${loc} não foi encontrado!`)
}