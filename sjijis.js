var idade = 70
console.log(`Voce tem ${idade} anos`)
if(idade < 16) {
    console.log('nao vota')
} else if(idade < 18 || idade > 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if(hora < 12) {
    console.log('Bom dia')
} else if(hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

var agora = new Date()
var diasem = agora.getDay()

switch (diasem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('terca')
        break;
    case 3:
        console.log('quarta')
        break;
    case 4:
        console.log('quinta')
        break;
    case 5:
        console.log('sexta')
        break;
    case 6:
        console.log("sabado")
        break;
    default:
        console.log('ERRO')
        break;
}