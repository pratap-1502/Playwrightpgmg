import promptSync = require('prompt-sync')

let prompt = promptSync()

let fname: string = prompt('Enter your name: ')

console.log('hello ' + fname)