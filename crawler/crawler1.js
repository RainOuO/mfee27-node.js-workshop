const axios = require('axios');

axios
  .get(
    'https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220813&stockNo=2330&_=1660378514253'
  )
  .then((response) => {
    console.log(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
// TODO: 用 await 來寫
