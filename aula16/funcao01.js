function parimp(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
} 

console.log(parimp(20))

var res = parimp(10)
console.log(`O número é ${res}!`)

