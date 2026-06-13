let arrr1: number[] = [1, 2, 3, 4, 5, 6]
arrr1.splice(1, 1, 10)
//console.log(arrr1)
//insert only
arrr1.splice(0, 0, 4)
console.log(arrr1)

//add more than 2 elements
arrr1.splice(2, 0, 10, 20, 30, 40, 50)
console.log(arrr1)

let arrr2: string[] = ['david', 'tom', 'dick']
console.log(arrr2)
arrr2.splice(0, 3, 'john', 'pawn', 'teen')
console.log(arrr2)

// in slice() method start is inclusive and end is exclusive. 

let arrr4: number[] = [9, 8, 7, 6, 5, 4]

console.log(arrr4.slice(2, 4))

//concat is used for merging one or more arrays

let rr1