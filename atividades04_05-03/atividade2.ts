import * as readlineSync from "readline-sync";

const numero: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrado: boolean = false;
let loc = readlineSync.questionInt(`Digite o número que você deseja encontrar: `);

for (let i = 0; i < numero.length; i++) {
        if(numero[i] == loc){
            encontrado = true;
            console.log(`O número ${numero[i]} está localizado na posição ${i}`);
        }
}
if (encontrado == false){
    console.log(`O número ${loc} não foi encontrado!`)
}