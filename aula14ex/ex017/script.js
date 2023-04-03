var tab = document.querySelector("select#seltab")

function tabuada() {
    var num = document.querySelector("input#txtn")

    if(num.value.length == 0) {
        window.alert("Por favor digite um número!")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        var cont = 1;
        while (cont<=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
    
}

function limpar() {
    tab.innerHTML = '<option>Digite outro valor</option>'
}