var agora= new Date()
var diaSe= agora.getDay()
/* 
    0= domingo
    1= segunda
    2= terça
    3= quarta
    4= quinta
    5= sexta
    6= sábado 
*/
switch(diaSe){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda-feira')
        break
    case 2:
        console.log('Hoje é terça-feira')
        break
    case 3:
        console.log('Hoje é quarta-feira')
        break
    case 4:
        console.log('Hoje é quinta-feira')
        break
    case 5:
        console.log('Hoje é sexta-feira')
        break
    case 6:
        console.log('Hoje é sábado')
        break
    default:
        console.log('Dia inválido')
        break
}