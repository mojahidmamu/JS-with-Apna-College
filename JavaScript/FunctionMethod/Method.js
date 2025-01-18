// map, filter, find, reduce, 
// let num = [1,2,3,4,5,6];
// let newArray = num.find( (val)=> {
//     return val % 2 === 0;
// })
// console.log(newArray)
// let arr = [1,2,3,4 ];
// const output = arr.reduce( (res, cur) => {
//     return res + cur;
// })
// console.log(output) // output = 10
// let marks = [88, 95, 98]
// const output = marks.filter( (val) => {
//     return val > 90;
// })
// console.log(output)
let n = prompt('enter a number: ')
let arr = []
for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr)

let sum = arr.reduce( (res, cur) => {
    return res + cur;
})
console.log('sum is:', sum)

let factorial = arr.reduce( (res, cur) => {
    return res * cur;
})
console.log('factorial is:', factorial)