function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(10));

function pi(){
    return 3.14
}

var total = 5 * pi();
console.log(pi)
console.log(pi())
console.log('total', total)

function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(80, 1.8))

function corFavorita(cor) {
    if(cor === 'Azul'){
        return 'Eu gosto de Azul'
    } else if (cor === 'Verde'){
        return 'Eu gosto de Verde'
    } else {
        return 'Eu não gosto de nada'
    }
}

addEventListener('click', function(){
    console.log('Clicou')
})