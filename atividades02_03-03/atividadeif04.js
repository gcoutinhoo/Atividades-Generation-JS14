import leia from "readline-sync";

let selecione;

let invertebrado = ("Invertebrado");
let inseto = ("Inseto");
let anelideo = ("Anelídeo");
let vertebrado = ("Vertebrado");
let mamifero = ("Mamífero");
let ave = ("Ave");
let ornivoro = ("Ornívoro");
let herbivoro = ("Herbívoro");
let carnivoro = ("Carnívoro");
let hematofago = ("Hematófago")





selecione = leia.question(`Selecione um tipo\n${vertebrado} ou ${invertebrado}: `)

if(selecione === "Vertebrado"){
    vertebrado = leia.question(`Selecione um subtipo\n${mamifero} ou ${ave}: `)
        if(mamifero){
            mamifero = leia.question(`Seleciona a alimentação\n${ornivoro} ou ${herbivoro}: `)
        }else{
            ave = leia.question(`Seleciona a alimentação\n${carnivoro} ou ${ornivoro}: `)
        }
            if(mamifero && ornivoro){
                console.log("Homem")
            }else if(mamifero && herbivoro){
                console.log("Vaca")
            }else if(ave && carnivoro){
                console.log("Águia")
            }else{
                console.log("Pomba")
            }
}else{
    invertebrado = leia.question(`Selecione um subtipo\n${inseto} ou ${anelideo}: `)
    if(inseto){
            inseto = leia.question(`Seleciona a alimentação\n${hematofago} ou ${herbivoro}: `)
        }else{
            anelideo = leia.question(`Seleciona a alimentação\n${hematofago} ou ${ornivoro}: `)
        }
            if(inseto && herbivoro){
                console.log("Lagarta")
            }else if(inseto && hematofago){
                console.log("Pulga")
            }else if(anelideo && ornivoro){
                console.log("Minhoca")
            }else{
                console.log("Sanguessuga")
            }
}
