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
          