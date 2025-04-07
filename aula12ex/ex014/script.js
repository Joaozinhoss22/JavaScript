function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if ( hora >= 0 && hora < 12) {
        img.src = 'manhaGIMP.jpg'
        document.body.style.background = '#364c1e'
    } 
    
    else if (hora >= 12 && hora <18) {
        img.src = 'tardeGIMP.jpg'
        document.body.style.background = '#ffc65d'
    }
    
    else {
        img.src = 'noiteGIMP.jpg'
        document.body.style.background = '#193a5b'
    }
}