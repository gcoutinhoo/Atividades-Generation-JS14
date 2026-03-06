import { Queue } from "./Queue.ts";
import * as readlineSync from "readline-sync";

const fila = new Queue<string>();
let opcao: number = 0;

do{
    console.log("===========================================\n")
    console.log("      1 - Adicionar Cliente na Fila")
    console.log("      2 - Listar todos os Cliente")
    console.log("      3 - Retirar Cliente da Fila")
    console.log("      0 - Sair")
    console.log("\n===========================================\n")

    opcao = readlineSync.questionInt("Digite uma opção: ")
    
    switch(opcao){
        
        case 1: 
            let cliente = readlineSync.question("Digite o nome: \n");
            fila.enqueue(cliente);
            console.log("Cliente Adicionado!\n");
        break;

        case 2:
            if(fila.isEmpty()){
                console.log("A Fila está vazia!\n");
            }else{
            console.log("Lista de Clinetes na Fila\n");
            fila.printQueue();
            }
        break;

        case 3:
            if(fila.isEmpty()){
                console.log("A Fila está vazia!\n");
            }else{
            console.log("Lista de Clinetes na Fila\n");
            fila.dequeue();
            fila.printQueue();
            console.log("O Cliente foi chamado\n");
            }
        break;

        case 0:
            console.log("Programa finalizado!");
        break;
        default:
            console.log("Opção inválida!\n");
        break;
    }
        

}while(opcao !== 0);
