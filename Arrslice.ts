let names4 = ['jan', 'feb', 'mar', 'apr', 'may']
for (let i = 0; i < names4.length; i++) {
    console.log(names4[i])
}

console.log("==========sliced result=======")

//
let slicedresult = names4.slice(1, 4)
console.log(slicedresult)
for (const element of slicedresult) {
    console.log(element)
}

