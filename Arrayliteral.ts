let num2: number[] = [1, 2, 3, 4, 5]
//console.log("first array ", num2)

let num3: number[] = new Array(10, 20, 30, 40)
//console.log("second array", num3)

for (let i = 0; i < num2.length; i++) {
    console.log(num2[i])
}

console.log('===============')

for (const element of num2) {
    console.log(element)
}

console.log('===============')
for (const key in num2) {
    console.log('key', '', 'value')
    console.log(key, '==>', num2[key])

}