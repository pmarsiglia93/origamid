//Atribuição

var numero = 20
var numero2 = 40

numero += numero2

console.log(numero)

//Ternário
//Atribuir um valor dependendo de algo, dependendo de alguma condição

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = (idade>=18 && naoPossuiDiabetes) ? 'Pode Beber' : 'Não Pode Beber';
// Não faz sentidos booleanos retornarem no ternário pois eles voltariam true ou false sem o ternário diante a condição

console.log(podeBeber)

//if Abreviado

var possuiFaculdade = true;
if(possuiFaculdade)
    console.log('Sim possui')
else
    console.log('Não possui')

//Exercicios:

//Exercício 1

var scroll = 1000

scroll += 500

console.log('scroll:', scroll)

//Exercicio 2

var possuiCarro = true
var possuiCasa = false
var darCredito 

darCredito = (possuiCarro && possuiCasa) ? 'Dar Credito' : 'Negar Credito'
console.log(darCredito)