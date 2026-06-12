function greet(callback: () => void) {
    console.log("I'm in greet function now")
    callback()
}
function saybye() {
    console.log("bye")

}

greet(saybye)

