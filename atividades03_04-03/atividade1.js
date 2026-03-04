import leia from 'readline-sync';

let num1, num2;

num1 = leia.question("Digite o primeiro número do intervalo: ");
num2 = leia.question("Digite o último número do intervalo: ");

if(num1 >= num2){
    console.log("Intervalo inválido!");
}else{
    console.log(`No intervalo entre ${num1} e ${num2}:`);
}

for(let contador = num1; contador <= num2; contador++){
    let resto3 = contador % 3
    let resto5 = contador % 5
        if(resto3 === 0 && resto5 === 0){
            console.log(`${contador} é multiplo de 3 e 5`);
        }
}