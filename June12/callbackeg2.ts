function greet3(callback:() =>void)
{
    console.log("hello hi")
    callback()
    
}

function bye()
{
    console.log("bye bye")
}

greet3(bye)