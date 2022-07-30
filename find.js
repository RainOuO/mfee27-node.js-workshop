     let ary = [
  {
    name: 'Alex',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Rose',
    like: '薯條',
    age: 24
  },
  {
    name: 'Lisa',
    like: '章魚燒',
    age: 12
  },
];

var findLike = ary.find(function(item, index, array){
  return item.like === '薯條'; 
});
console.log(findLike);


function find(ary) {
  let result = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].age ==24) {
      result.push(ary[i]);
    }
  }
  return result;
}
console.log(find(ary));