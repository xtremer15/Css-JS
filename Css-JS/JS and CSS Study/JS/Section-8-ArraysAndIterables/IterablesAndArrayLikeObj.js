// // const num = [1, 2, 3, 5, 6]
// // document.write(num)
// // console.table(num)

// // const moreNums = new Array(5) //Va creea un array cu lungime fixa 5 elem
// // const moreNums2 = new Array(5, 2) //Va creea un array cu lungime 2, cu acele 2 elemente  
// // console.log(moreNums);
// // console.log(moreNums2);

// // const evenMoreNums = Array.of(2)
// // console.log(evenMoreNums);

// // const nodeListOfLi = document.querySelectorAll("li")
// // console.log(nodeListOfLi);


// // const arrayFromNodeList = Array.from(nodeListOfLi)
// // console.log(arrayFromNodeList);

// // const sameDataType = ["a", "b"]
// // const multipleDataType = [30, 'max', {
// //     moreDetails: []
// // }]

// // const twodArrays = [
// //     [1, 2, 3, 5],
// //     [1, 3.2, 4, 2.1]
// // ]


// // for (const data of twodArrays) {
// //     for (const dataPoint of data) {
// //         console.log(dataPoint);
// //     }

// // }


// // const hobbies = ["Read", "Write", "Listen"]
// // hobbies.push("dance")
// // hobbies.unshift("walk")
// // console.log(hobbies)
// // hobbies.shift()
// // hobbies.pop()
// // console.log(hobbies)

// // hobbies[5] = "New"
// // console.log(hobbies[4]);
// // console.log(hobbies);

// // hobbies.splice(1, 1, "new Hobby")
// // console.log(hobbies);


// // hobbies.splice(-1, 1, "new Hobby")
// // console.log(hobbies);

// // const testResults = [1, 1.22, 9.11, 10.99, 3]
// // // const storedResults = testResults.slice()
// // // testResults.push(23)
// // // console.log(testResults);
// // // console.log(storedResults);
// // // const partiallyStoredRestults = storedResults.slice(2, 5)
// // // console.log(partiallyStoredRestults);
// // const newArr = testResults.concat([4,6,4],[8,9,10])
// // console.log(newArr);
// // console.log(newArr.indexOf(9.11));
// // const personData = [{
// //         name: "Miguel"
// //     }, {
// //         name: "Manuel"
// //     },
// //     {
// //         name: "Unguru"
// //     }, {
// //         name: "Bulan"
// //     }
// // ]
// // console.log(personData.indexOf({
// //     name: "Miguel"
// // }));
// // const unguru = personData.find((singleObjFromArray, indexOfTheObj, fullArray) => {
// //     return singleObjFromArray.name === "Unguru"
// // })
// // console.log(unguru);

// // const unguruIndex = personData.findIndex((singleObjFromArray, indexOfTheObj, fullArray) => {
// //     return singleObjFromArray.name === "Unguru"
// // })
// // console.log(unguruIndex);
// // const prices = [1, 1.22, 9.11, 10.99, 3]
// // const tax = 0.19
// // const taxAdjPrices = []

// // prices.forEach((price, index, prices) => {
// //     const priceObj = {
// //         index: index,
// //         priceAdj: price * (1 + tax)
// //     }
// //     taxAdjPrices.push(priceObj)
// // })

// // console.log(taxAdjPrices);

// // const newArray = prices.map((price, index, prices) => {
// //     const priceObj = {
// //         index: index,
// //         priceAdj: price * (1 + tax)
// //     }
// //     return priceObj
// // })
// // console.log(newArray);
// // const sortedPrices = prices.sort((a, b) => {
// //     if (a > b) {
// //         return -1;
// //     } else if (a === b) {
// //         return 0
// //     } else {
// //         return 1;
// //     }
// // })
// // const prices = [1, 1.22, 9.11, 10.99, 3]
// // const filtereData = prices.filter((value, index, array) => {
// //     return value > 6
// // })
// // console.log(filtereData);

// const prices = [1, 1.22, 9.11, 10.99, 3]

// let sum = prices.reduce((previousValue, crrentValue, currentIndex, array) => {
//     return previousValue + crrentValue;
// })

// const data = 'new Ywor;10.99;2000'
// const transformData = data.split(";")

// const nameFragments = ["max", "schwartz"]
// const name = nameFragments.join(" ")

// const copiedNameFragments = [...nameFragments]
// console.log(nameFragments, copiedNameFragments)
// nameFragments.push("Jon")
// console.log(nameFragments, copiedNameFragments)


// const persons = [{
//     name: "Anna",
//     age: 20
// }, {
//     name: "Joni",
//     age: 21
// }]

// const copiedPersons = [...persons]
// persons.push({
//     name: "Tike",
//     age: 42
// })

// console.log(persons, copiedPersons)
// const names = ["max", "shivara", "mihai"]
// const [max, shivara, mihai] = names
// console.log(max, shivara, mihai)