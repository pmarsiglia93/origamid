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

function mostraConsole(){
    console.log('Oi')
}


// addEventListener('click', function(){
//     console.log('Clicou')
// })

addEventListener('click', mostraConsole)

console.log('Exercícios')

console.log('1- Criar uma função para verificar se um valor é Truthy')

function valorTruthy(num){
    if(num>0){
        console.log('Esse número é Truthy')
    } else{
        console.log('Esse número é negativo')
    }

    return num;
}

console.log(valorTruthy(2))

console.log('2 - Crie uma função matemática que retorne o perímetro de um quadrado')
console.log('Observação: O perimetro é a soma dos quatro lados do quadrado')


function ladosQuadrado(lado){
    return (lado * 4)
}

console.log('O valor do perimetro é: ', ladosQuadrado(2))

console.log('3- Crie uma função que retorne o seu nome completo')
console.log('obs: ele deve possuir os parâmetros: nome e sobrenome')

function nomeSobrenome(nome, sobrenome){

    console.log('Nome: ', nome)
    console.log('Sobrenome: ', sobrenome)
    console.log('Nome Completo:' , nome +' '+ sobrenome)
}

nomeSobrenome('Paulo', 'Marsiglia')

console.log('4 - Crie uma função que verifica se o número é Par')

function numeroPar(num){
    if(num % 2 === 0 ){
        console.log('Esse número é Par')
    } else {
        console.log('Esse número é Impar')
    }
}

numeroPar(2)

console.log('5 - TypeOf')

function getTypeOfData(data){
    return typeof data
}

console.log(getTypeOfData(20));
console.log(getTypeOfData("Hello"));
console.log(getTypeOfData(true));
console.log(getTypeOfData([10, 20, 30]));

console.log('6 - Event Scroll')

function addScrollEvent() {
    function handleScrollEvent() {
      console.log('Está scrollando!');
    }
  
    // Verifica se o navegador suporta o evento de scroll
    if ('onscroll' in window) {
      // Adiciona o evento de scroll e chama a função handleScrollEvent quando ocorrer o evento
      window.addEventListener('scroll', handleScrollEvent);
    } else {
      // Caso o navegador não suporte o evento de scroll, trata o erro ou avisa o usuário
      console.log('Seu navegador não suporta o evento de scroll.');
    }
  }  

  addScrollEvent();

  function isTruthy(dado){
      return !!dado;
  }
