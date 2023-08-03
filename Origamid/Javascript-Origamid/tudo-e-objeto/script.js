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


//length para mostrar a quantidade do Array
//passar item para mostrar todas as opções.
//Break
//O loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'Xbox', 'Gameboy'];

var frutas

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]) 
    if(videoGames[item] === 'PS4'){
        break
    }
}

//forEach

// var frutas = ['Banana', 'Pera', 'Maça', 'Uva']

// frutas.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

//Exercicios

var copasBrasil = [1959, 1962, 1970, 1994, 2002]

copasBrasil.forEach(function(item){
    console.log('O Brasil ganhou as Copas de:', item)
});

var frutas = ['Banana', 'Pera', 'Maça', 'Uva', 'Melancia'];

for(var item = 0; item < frutas.length; item++){
    var variavelMelancia = frutas[4]
    console.log('Ultima Fruta do Array:', variavelMelancia)
    console.log(frutas[item])
    if(frutas[item] === 'Pera'){
        break
    }
}

//Resolução

var brasilCampeao = [1959, 1962, 1970, 1994, 2002]

for (var i = 0; i < brasilCampeao.length; i++){
    console.log('O Brasil ganhou a copa de:', brasilCampeao[i])
}

var frutas = ['Banana', 'Pera', 'Maça', 'Uva', 'Melancia'];
for (var fruta = 0; fruta < frutas.length; fruta++ ){
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera'){
        break;
    }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log('ULTIMA FRUTA:', ultimaFruta)
