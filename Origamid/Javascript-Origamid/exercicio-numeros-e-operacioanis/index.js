// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log('O resultado da expressão será 35')
console.log('Resultado: ', total)

// Crie duas expressões que retornem NaN

var numero1 = '28s'
var numero2 = 10

var numero3 = numero1 + numero2

console.log(isNaN(numero3))
console.log(numero3)

// Somar a string '200' com o número 50 e retornar 250

var numero4 = '200'
var numero5 = 50

var somaString = +numero4 + numero5
console.log('O resultado é: ',somaString)

// Incremente o número 5 e retorne o seu valor incrementado

var numeroCinco = 5

console.log(numeroCinco++)
console.log('Valor Incrementado: ', numeroCinco)


// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoDividido = numero / 2
var resultadoDividido = pesoDividido + unidade

console.log('peso dividido: ', pesoDividido)
console.log('resultado dividido: ', resultadoDividido)
