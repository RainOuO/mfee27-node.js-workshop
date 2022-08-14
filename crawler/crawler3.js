// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const fsPromises = fs.promises;

let queryDate = moment().format('YYYYMMDD'); //'20220814';

async function readStock(stockNo, queryDate) {
  try {
    let response = await axios.get(
      `https://www.twse.com.tw/exchangeReport/STOCK_DAY`,
      {
        params: {
          response: 'json',
          date: queryDate,
          stockNo,
        },
      }
    );
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  try {
    let stockNo = await fsPromises.readFile('stock.txt', 'utf-8');
    readStock(stockNo, queryDate);
  } catch (e) {
    console.error(e);
  }
})();

// 開始抓資料
// 2330 台積電
// 2603 長榮
// let stockNo = data();
// let queryDate = '20220814';
// // axios.get(url, 設定)

// (async () => {})();
