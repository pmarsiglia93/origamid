'use strict'

function mostrarCarro(){
    var carro = 'Fusca'
    console.log('carro:', carro)
}

//var vaza o bloco, por isso declaramos const e let

if(true){
    var carro = 'Fusca';
    console.log(carro)
}

console.log(carro)

//Const e let não vazam o escopo

//var vaza quando a validação for false

//As {} criam um bloco

let semana = 'Sexta';

console.log(semana);

const data = {
    ano: 2023,
    mes: 'Agosto'
}

data.ano = 2019

let ano
ano = 2018;
ano++
console.log(ano)

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas)
}


    function somarDois(x){
        const dois = 2
        return x + dois;
    }
    
    function dividirDois(x, dois){
        return x / dois;
    }
    
    const resultadoSoma = somarDois(4)
    console.log(resultadoSoma)
    
    const resultadoDivisao = dividirDois(6, 2)
    console.log(resultadoDivisao)

    //O que fazer para total retornar 500?

    const numero = 50

    for(let numero = 0; numero < 10; numero++){
        console.log('numero dentro do for:', numero)
    }

    const total = 10 * numero;
    console.log(total);


