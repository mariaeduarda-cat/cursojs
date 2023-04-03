 let num = [5, 8, 9, 2, 3]
num[5] = 6
num.push(7)
num.sort()

console.log(`Nosso vetor é o ${num} e seu tamanho é ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
   console.log(`O valor está na posição ${pos}`)  
}


/* let valores = [5, 6, 3, 7, 3, 2, 8]

 for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 

for(let pos in valores) {
    console.log(valores[pos])
} */


