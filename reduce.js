let arr = [
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
  ];      function reduce(arr){
          let sum = 0;
          for (let i of arr) {
              sum += i.age;
            }
            return sum
          }
          console.log(reduce(arr)); //age 相加=54
          
          //////////////////////////// test 陣列合併 不確定請問老師這樣對嗎?
          const array = [['a', 'b'], ['c', 'd'], ['e', 'f']];
          console.log(array);
          let sums = '';
          for (let n of array) {
              sums += n;
          }
          console.log(sums.split(' ')); //字串轉陣列 印出['a,bc,de,f']