function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes();
    var tempo = setInterval(carregar, 1000);
    msg.innerHTML = `Agora são ${hora}:${minuto}
    `
    if(minuto < 10) {
        minuto = '0' + minuto;
    }

    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f0c882'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#ff8901'     
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#81649a'
    }
}

