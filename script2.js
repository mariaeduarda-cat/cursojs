let conf = document.getElementById('botao')
conf.addEventListener('click', contar)

function contar() {
    let ini = Number(document.getElementById('txti'))
    let fim = Number(document.getElementById('txtf')
    let pas = Number(document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.length == 0 || fim.length == 0 || pas.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: '

        if(ini < fim) {
            for(let c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = ini; c >= fim; c -= pas) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
 
        }
        res.innerHTML += ` ${c} \u{1F3C1}`
    }
} 
