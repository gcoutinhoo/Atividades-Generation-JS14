import { Stack } from "./Stack.ts";
import * as readlineSync from "readline-sync";

const pilha = new Stack<string>();
let opcao: number = 0;

do {

    console.log("===========================================\n");
    console.log("      1 - Adicionar Livro na Pilha");
    console.log("      2 - Listar todos os Livros");
    console.log("      3 - Retirar Livro da Pilha");
    console.log("      0 - Sair");
    console.log("\n===========================================\n");

    opcao = readlineSync.questionInt("Digite uma opção: ");

    switch(opcao){

        case 1: 
            let livro = readlineSync.question("Digite o nome: \n");
            console.log("Pilha:");
            pilha.push(livro);
            console.log("Livro adicionado!");
        break;

        case 2: 
            if(pilha.isEmpty()){
                console.log("A Pilha está vazia!")
            }else{
                console.log("Pilha: ")
                pilha.printStack();
            }
        break;

        case 3:
            if(pilha.isEmpty()){
                console.log("A Pilha está vazia!")
            }else{
                console.log("Pilha: ")
                pilha.pop();
                pilha.printStack();
                console.log("Um Livro foi retirado da pilha!")
            }
        break;

        case 0:
            console.log("Programa finalizado!");
        break;

        default:
            console.log("Opção inválida!\n");
        break;

    }
} while (opcao !== 0);
