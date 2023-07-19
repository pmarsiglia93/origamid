// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 29
var idadeMae = 64

if (minhaIdade < idadeMae){
  console.log("é menor")
} else if (minhaIdade == idadeMae){
  console.log("é igual")
}else{
  console.log("é maior")
}

// Qual valor é retornado na seguinte expressão?
// Vai retornar o primeiro falso ou o último verdadeiro
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log('O valor é:', expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; // true
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

if(nome){
  console.log('Truthy')
} else{
  console.log('Falsy')
}

if(idade){
  console.log('Truthy')
} else{
  console.log('Falsy')
}

if(possuiDoutorado){
  console.log('Thruthy')
} else{
  console.log('Falsy')
}

if(empregoFuturo){
  console.log('Thruthy')
} else{
  console.log('Falsy')
}

if(dinheiroNaConta){
  console.log('Thruthy')
} else{
  console.log('Falsy')
}

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('O Brasil tem mais habitantes')
} else{
  console.log('A China tem mais habitantes')
}

// O que irá aparecer no console? Falso porque ele vai parar na primeira condição onde gato não está escrito exatamente igual.
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Não entendi o motivo.
// Tudo é verdadeiro então ele retorna o último verdadeiro
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}