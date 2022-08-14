const axios = require('axios');
const moment = require('moment');
const fsPromises = require('fs').promises;

// 取得目前時間
let querydate = moment().format('YYYYMMDD');
console.log(querydate);

// 取得股票資訊
// axios.get(url, data)
async function getStockInfo(stockNo, querydate) {
  try {
    let response = await axios.get(
      `https://www.twse.com.tw/exchangeReport/STOCK_DAY`,
      {
        params: {
          response: 'json',
          date: querydate,
          stockNo,
        },
      }
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}

// 從stock.txt讀出股票代碼並查詢股票資訊
(async function () {
  try {
    let stockNo = await fsPromises.readFile('stock.txt', 'utf-8');
    getStockInfo(stockNo, querydate);
  } catch (err) {
    console.error(`發生錯誤: ${err}`);
  }
})();
