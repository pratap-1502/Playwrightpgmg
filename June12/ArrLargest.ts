let arr3 = [2, 3, 5, 7, 86, 7, 6, 453433, 56]
let largest = 0
for (let i = 0; i < arr3.length; i++) {
    if (largest < arr3[i])
        largest = arr3[i]

}
console.log(largest)