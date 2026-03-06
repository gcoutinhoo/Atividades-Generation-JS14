import * as readlineSync from "readline-sync";

const cores: Array<string> = new Array<string>(5);

for(let i = 0; i < cores.length ; i++){
    cores[i] = readlineSync.question("Digite suas cores: ")
}

console.log(`Listar todas as cores:\n${cores}`);

cores.sort();

console.log(`Ordenar as cores:\n${cores}`);