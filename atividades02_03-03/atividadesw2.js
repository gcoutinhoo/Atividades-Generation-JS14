import leia from "readline-sync";

let nome, cargo, salario;

console.log("\n1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Tecnico de TI")

nome = leia.question("\nNome do colaborador: ");
cargo = leia.questionInt("Cargo: ");
salario = leia.questionFloat("Salário: R$");

switch(cargo){
    case 1:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Gerente\nSalário: R$${(salario + (0.1 * salario)).toFixed(2)}`)
        break;
    case 2:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Vendedor\nSalário: R$${(salario + (0.07 * salario)).toFixed(2)}`)
        break;
    case 3:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Supervisor\nSalário: R$${(salario + (0.09 * salario)).toFixed(2)}`)
        break;
    case 4:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Motorista\nSalário: R$${(salario + (0.06 * salario)).toFixed(2)}`)
        break;
    case 5:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Estoquista\nSalário: R$${(salario + (0.05 * salario)).toFixed(2)}`)
        break;
    case 6:
        console.log(`\nNome do colaborador: ${nome}\ncargo: Tecnico de TI\nSalário: R$${(salario + (0.08 * salario) ).toFixed(2)}`)
        break;
    default:
        console.log("Opção inválida!")
        break;
}