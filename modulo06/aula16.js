function parimp(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
let res= parimp(4)
console.log(res)
console.log(parimp(223))

function som(n1=0,n2=3){
    return n1+n2
}
 console.log(som(10,9))


 let r= function (x){
    return x*x
 }
 console.log(r(20))