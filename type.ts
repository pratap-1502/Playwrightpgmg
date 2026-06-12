let x: number = 10
console.log('x = ', x)
let y: null
console.log('y = ', y)
let z: string = "tata"
console.log('z = ', z)
let u: any = 'birla'
console.log('u = ', u)
let v: boolean = true
console.log('v = ', v)
let w: string | number = 10
console.log('w : ', w)
w = "ten";
console.log('w after ten assignment', w)
let t
console.log('nothing defined =', t)
function log(): void {
    console.log("log() with void return type is called")

}

log()