var possuiGraduacao = true;

if(possuiGraduacao){
    console.log('é verdadeiro')
}else{
    console.log('é falso')
}

var timeFavorito = 'Palmeiras'

switch(timeFavorito){
    case 'Palmeiras':
        console.log('Cabeça fria e coração quente')
        break;
    case 'Corinthians':
        console.log('Dois mundiais e uma libertadores')
        break;
    case 'São Paulo':
        console.log('Trikas não ganha nada')
        break;
    default:
        console.log('Você não torce para um time de São Paulo')
}