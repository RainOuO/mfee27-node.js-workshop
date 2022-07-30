const ary = [5000, 2500, 4000, 1300];
let test = ary.map(function(num) {
    return num * 2;});
console.log(test); //[ 10000, 5000, 8000, 2600 ]

function map(ary) {
    let result = [];
    for (let i = 0; i < ary.length; i++) {
            result.push(ary[i] * 2);
    }
    return result;
}
console.log(map(ary)); //[ 10000, 5000, 8000, 2600 ]