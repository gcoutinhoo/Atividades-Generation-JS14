import leia from "readline-sync";

let produto, quantidade;

console.log("1 - Cachorro Quente")
console.log("2 - X-Salada")
console.log("3 - X-Bacon")
console.log("4 - Bauru")
console.log("5 - Refrigerante")
console.log("6 - Suco de Laranja")

produto = leia.questionInt("\nCódigo do Produto: ")
quantidade = leia.questionInt("\nQuantidade: ");

switch(produto){
    case 1:
        console.log(`\nProduto: Cachorro Quente\nValor: R$${quantidade * 10}.00`)
        break;
    case 2:
        console.log(`\nProduto: X-Salada\nValor: R$${quantidade * 15}.00`)
        break;
    case 3:
        console.log(`\nProduto: X-Bacon\nValor: R$${quantidade * 18}.00`)
        break;
    case 4:
        console.log(`\nProduto: Bauru\nValor: R$${quantidade * 12}.00`)
        break;
    case 5:
        console.log(`\nProduto: Refrigerante\nValor: R$${quantidade * 8}.00`)
        break;
    case 6:
        console.log(`\nProduto: Suco de Laranja\nValor: R$${quantidade * 13}.00`)
        break;
    default:
        console.log("Opção inválida!")
        break;
}
