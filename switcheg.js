"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
for (var i = 1; i <= 5; i++) {
    var choice = Number(prompt('Enter a choice(1-3): '));
    switch (choice) {
        case 1:
            console.log('you have selected java');
            break;
        case 2:
            console.log('you have selected python');
            break;
        case 3:
            console.log('you have selected C# ');
            break;
        default:
            console.log('you have not selected anything ');
    }
}
