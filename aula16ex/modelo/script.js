let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function handle(e) {
    if(e.keyCode == 13) {
        adicionar()
    }
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var maior = Math.max.apply(null, valores)
        var menor = Math.min.apply(null, valores)
        let tot = valores.length
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<br>O maior valor informado é o ${maior}.<br> O menor valor informado é o ${menor}. <br>A soma de todos os valores é ${soma}.<br>A média entre todos os valores é de ${media.toFixed(2)}`
    }
}