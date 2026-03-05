import readlineSync from "readline-sync";

const numero = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let encontrado: boolean = false;
let loc = readlineSync.questionInt(`Digite o número que você deseja encontrar: `);

for (let num of numero){
        if (num == loc){
            encontrado = true;
            console.log(`O número ${loc} foi encontrado!`);
        }
}
if (encontrado == false){
console.log(`O número ${loc} não foi encontrado!`)
}