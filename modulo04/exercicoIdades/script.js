function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex=document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.marginTop = '10px'
        
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src','Bhomem.jpg')
            }else if(idade <21){
                img.setAttribute('src','Yhomem.jpg')
            } else if(idade <50){
                img.setAttribute('src','Homem.jpg')
            } else {
                img.setAttribute('src','Ohomem.jpg')
            }
        }
        else if (fsex[1].checked){
            gênero = 'Mulher'
              if(idade >=0 && idade <10){
                img.setAttribute('src','Bmulher.jpg')
            }else if(idade <21){
                img.setAttribute('src','Ymulher.jpg')
            } else if(idade <50){
                img.setAttribute('src','mulher.jpg')
            } else {
                img.setAttribute('src','Omulher.jpg')
            }
        }

        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        

    }
}