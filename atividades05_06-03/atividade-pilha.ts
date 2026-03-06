import { Stack } from "./Stack.ts";
import * as readlineSync from "readline-sync";

const pilha = new Stack<string>();
let opcao: number = 0;

console.log("===========================================\n");
console.log("      1 - Adicionar Livro na Pilha");
console.log("      2 - Listar todos os Livros");
console.log("      3 - Retirar Livro da Pilha");
console.log("      0 - Sar");
console.log("\n===========================================\n");

opcao = readlineSync.questionInt("Digite uma opção: ");

do {
    
} while (opcao !== 0);
