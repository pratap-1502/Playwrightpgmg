let names3 = [100, 300, 400, 500, 'Ram', 'Rajan', true, false, 'Karthik']
for (const element of names3) {
    console.log(element)
}

//pop is used to remove the last element
names3.pop()
for (let i = 0; i < names3.length; i++) {
    console.log(names3[i])
}
