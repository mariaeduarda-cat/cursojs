var valores = [3, 5, 6, 7, 8, 2, 9]
valores.sort()
console.log(valores)

for(var pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(var pos in valores) {
    console.log(`A posiçaõ ${pos} tem o valor ${valores[pos]}`)
}