var nome = 'Paulo';

var nomeMinusculo = nome.toLowerCase()

var altura = 1.8;

//Selecionar um documento com Javascript

var btn = document.querySelector('.btn')

//nomeie 3 propriedades ou métodos de strings

var nome = 'Paulo';

var nome1 = nome.length
var nome2 = nome.toLowerCase()
var nome3 = nome.toUpperCase()

//nomeie 5 propriedades ou métodos do DOM

var btn = document.querySelector('.btn')

console.log('btn:', btn)

// btn.addEventListener
// btn.appendChild
// btn.innerHTML
// btn.id
// btn.outerHtml

//Busque na web um objeto(método) capaz de interagir com clipboard,
//Clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var videoGames = ['Switch', 'PS4', 'Xbox', 'Gameboy']

console.log('p1:', videoGames[0])
console.log('p2:', videoGames[1])
console.log('p3:', videoGames[2])
console.log('p4:', videoGames[3])

var ultimoItem = videoGames.pop();

console.log('ultimoItem:', ultimoItem)

videoGames.push('PS5')

//For Loop
//Fazer algo repetidamente

for (var numero = 0; numero <= 10; numero ++){
    console.log(numero)
}

//While Loop
//Fazer enquanto

var i = 0
while (i <= 10){
    console.log('i:', i);
    i++
}