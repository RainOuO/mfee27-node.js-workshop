const arry = [1, 10, 20, 19];
const reduce = arry.reduce((item, value) => {
    return item + value
}, 0);
console.log(reduce); 
/////
let array = [1, 10, 20, 19];
let sum = 0;
for (let i of array) {
    sum += i;
}
console.log(sum);
//////////////////////////// test 陣列合併 不確定請問老師這樣對嗎?
const arr = [['a', 'b'], ['c', 'd'], ['e', 'f']];
console.log(arr);
//////////////
let sums = '';
for (let n of arr) {
    sums += n;
}
console.log(sums.split(' ')); //字串轉陣列