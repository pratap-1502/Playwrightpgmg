let arr4:number[] = [2,3,4,5,5]
console.log(arr4)

let arr5:Array<number> = [1,2,3,4,5,6]
console.log(arr5)

let strnames = ['Ram', 'Raj' , 'kaiser']
console.log(strnames)

let strnames2:Array<string> = ['Raju', 'Faizer', 'Tom']
console.log(strnames2)

let boolarr = [true, false, true, false, false]
console.log(boolarr)

let mixarr = [121,23,true,'sita', 'jumbo', false, 23.23]
console.log(mixarr)

//length property
console.log('length of arr',mixarr.length)

//changing elements

mixarr[0]=20000
console.log(mixarr)

//push() adds element at the end 

mixarr.push(3)
console.log(mixarr)

//push() use to add multiple values

mixarr.push(32,3,4,5,3)
console.log(mixarr)

//to add elements at the beginning use unshift()
mixarr.unshift(1,2,3,4,5)
console.log(mixarr)

//what do you use to remove last element answer is pop()
mixarr.pop()
console.log(mixarr)

// shift() to remove elements from the beginning

mixarr.shift()
console.log(mixarr)