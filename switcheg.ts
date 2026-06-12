import promptSync = require('prompt-sync')
const prompt = promptSync()

for (let i = 1; i <= 5; i++) {
    let choice: number = Number(prompt('Enter a choice(1-3): '))
    switch (choice) {
        case 1:
            console.log('you have selected java')
            break
        case 2:
            console.log('you have selected python')
            break;

        case 3:
            console.log('you have selected C# ')
            break
        default:
            console.log('you have not selected anything ')
    }
}