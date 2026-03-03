import leia from 'readline-sync';

let saque, deposito, operacao;
let saldo = 1000.00;

console.log("1 - Saldo")
console.log("2 - Saque")
console.log("3 - Depósito")

operacao = leia.questionInt("\nOperação: ")

switch(operacao){
    case 1:
        console.log(`\nOperação - Saldo\nR$ ${saldo}`)
        break;
    case 2:
        saque = leia.questionFloat("Valor: R$ ")
        if(saque > 1000.00){
            console.log("\nOperação - Saque\nSaldo Insuficiente!")
        }else{
            (saque = leia.questionFloat(`\nOperação - Saque\nNovo Saldo: R$${saque + saldo}`))
        }
        break;
    case 3:
        deposito = leia.questionFloat(`\nOperação - Depósito\nNovo Saldo: R$ ${deposito + saldo}`)
        break;
    default:
        console.log("\nOpção inválida!")
        break;
}
