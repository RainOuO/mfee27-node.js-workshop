const ary = [5000, 2500, 4000, 1300];
let test = ary.map(function(num) {
    return num * 2;});
console.log(test);

function map(ary) {
    let result = [];
    for (let i = 0; i < ary.length; i++) {
        if (ary !== 10000) {
            result.push(ary[i] * 2);
        }
    }
    return result;
}
console.log(map(ary));