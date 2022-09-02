const express = require('express');
const router = express.Router();
router.use(express.json());

router.post('/api/1.0/auth/register', (req, res, next) => {
  //確認資料有沒有收到
  console.log(req.body);
  //TODO  檢查EMAIL有沒有重複
  //        TODO 如果有,回復400跟錯誤訊息
  //TODO 密碼要雜湊 hash
  //TODO 資料存到資料庫
  //TODO 回覆前端
  res.json({});
});

//要加上中間件 express認得json

module.exports = router;
