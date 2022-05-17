
function clicar() {
    var res = document.getElementById('res');
    var ini = document.getElementById('txt1');
    var fim = document.getElementById('txt2');
    var pas = document.getElementById('txt3'); 
    
    if(pas.value == 0) {
        window.alert("Por favor, coloque um número válido")
    } else {
        res.innerHTML = "Contando"
        for(ini = 1; fim<5; pas+2) {
            res.innerHTML += `${pas} oloa`
        }
    }



}
 