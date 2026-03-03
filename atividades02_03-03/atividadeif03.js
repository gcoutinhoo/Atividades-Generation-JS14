import leia from 'readline-sync';

let nome, idade, doacao;

nome = leia.question("Digite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do doador: ")

if(idade >= 18 && idade <= 59){
    doacao = leia.keyInYN("Primeira doação de sangue?")
    console.log(`${nome} está apto(a) para doar sangue!`)
}else if(idade >= 60 && idade <= 69 && doacao === true){
    doacao = leia.keyInYN("Primeira doação de sangue?")
    console.log(`${nome} está apto(a) para doar sangue!`)
}else if(idade >= 60 && idade <= 69 && doacao === false){
    doacao = leia.keyInYN("Primeira doação de sangue?")
    console.log(`${nome} não está apto(a) para doar sangue!`)
}else{
    console.log("Primeira doação de sangue? [y/n]: n")
    console.log(`${nome} não está apto(a) para doar sangue!`)
}