let nums6 = [1, 2, 3, 4, 5, 6, 7, 8]
nums6.splice(2, 3, 30, 40, 50)
console.log(nums6)
for (const key in nums6) {
    console.log(key, '', nums6[key])
}