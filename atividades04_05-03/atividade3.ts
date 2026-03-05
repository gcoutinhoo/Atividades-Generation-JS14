import readlineSync from "readline-sync";

const numeros = new Set<number>();
let num: number;

console.log("Listar dados do Set: ");

do {
    num = readlineSync.questionInt(" ");

    if (numeros.has(num)) {
        console.log("O número já existe!");
        break;
    } else {
        numeros.add(num);
    }

} while (numeros.size < 10);

console.log("Listar dados do Set: ");
console.log(numeros);