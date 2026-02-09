let num =[2,4,6,8,1]
num.push(3)
console.log(num.sort())
console.log(num.length)
console.log(num[0])
console.log(num[2])
console.log(`o array  ${num}`)

let pos= num.indexOf(8)

if(pos==-1){
    console.log("o valor não foi encontrado em nenhuma posição")
}else{
    console.log(`O valor está na posição ${pos}`)
}