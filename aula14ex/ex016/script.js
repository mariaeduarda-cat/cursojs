function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if(i < f) {
             //Contagem crescente
            for(let cont = i; cont <= f; cont += p) {
            res.innerHTML += ` ${cont} \u{1F449}`
         }
          
        } else {
             //Contagem decrescente
             for(let cont =i; cont>=f; cont-=p) {
             res.innerHTML += ` ${cont} \u{1F449}`
            } 
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
 
























/*function clicar() {
    var res = document.getElementById('res');
    var ini = document.getElementById('txt1');
    var fim = document.getElementById('txt2');
    var pas = document.getElementById('txt3'); 
    
    if(pas.value == 0 || fim.value == 0) {
        res.innerHTML = "Impossível contar"
    } 



}*/
 