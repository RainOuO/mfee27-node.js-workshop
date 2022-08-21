const express = require('express');
require('dotenv').config();
// 利用 express 這個框架 來建議一個 web application
const app = express();
const port = process.env.SERVER_PORT;
app.get('/', (req, res) => {
  res.send('hello express');
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
