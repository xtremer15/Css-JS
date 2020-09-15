const person1 = {
    name: "Mihai"
}
const person2 = {
    name: "Constantin"
}

const personData = new Map([
    [person1, [{
        date: 'yesterday',
        price: 10
    }]]
])

console.log(personData)
console.log(personData.get(person1))
personData.set(person2, [{
    date: "some time ago",
    frequencey: 3
}])
console.log(personData.get(person2))

for (const key of personData.keys()) {
    console.log(key);

}


for (const [key, value] of personData.entries()) {
    console.log(key, value);

}