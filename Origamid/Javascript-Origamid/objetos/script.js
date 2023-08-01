var pessoa = {
    nome: 'Paulo',
    idade: 29,
}

console.log(pessoa)

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        console.log(this.lados)
        return this.lados * lado
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        console.log(this.lados)
        return this.lados * lado
    },
    cinco(){
        return 5;
    },

}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log('Metodo Pi:', Math.PI)
console.log('Metodo Randon:', Math.random())

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#fff',

    metadeHeight(){
        return this.height /2;
    }
}


menu.backgroundColor = '#000'

menu.color = 'blue'
menu.esconder = function (){
    console.log('Escondi')
}

var bg = menu.backgroundColor

console.log('bg:', bg)

//Exercício 1

var dadosPessoais = {
    nome: 'Paulo',
    sobrenome: 'Marsiglia',
    idade: 29,
    anoNascimento: 1993,

    nomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

dadosPessoais.nomeSobrenome = function(){
    return `${this.nome} ${this.sobrenome}`
}

//Exercício 2
//Modifique o valor da propriedade para preco 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000


//Exercício 3
//Crie o objeto de um labrador que represente um labrador, preto com 10 anos e que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,

    viuHomem(){
        console.log('latiu')
    }
}

//Resolução

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,

    latir(pessoa){
        if(pessoa === 'homem') {
            return 'Latir';
        } else{
            return 'Nada';
        }
    }
}