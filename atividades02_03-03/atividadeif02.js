import leia from "readline-sync";

let num;

num = leia.questionInt("\nDigite um número: ");

if(num % 2 == 0 && num >= 0){
    console.log(`\nO número ${num} é par e positivo!` );
}else if(num % 2 == 0 && num <= 0){
    console.log(`\nO número ${num} é par e negativo!` );
}else if(num % 2 != 0 && num >= 0){
    console.log(`\nO número ${num} é ímpar e positivo!`)
}else{
    console.log(`\nO número ${num} é ímpar e negativo!`)
}