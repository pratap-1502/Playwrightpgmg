let names1: string[] = ['john', 'joe', 'Dian', 'Trump']
names1.forEach((values) => {
    console.log(values)
})
console.log("after push below ")
names1.push("Putin")
names1.forEach((values) => {
    console.log(values)
})