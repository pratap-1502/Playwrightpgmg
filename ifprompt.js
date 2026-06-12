"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var fname = prompt('Enter your name: ');
console.log('hello ' + fname);
