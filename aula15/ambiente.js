var num = [5, 8, 2, 9, 3]
num.push(6)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos.`);
console.log(`O primeiro valor do vetor é o ${num[0]}`)

let pos = num.indexOf(8)

if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}.`)
}
