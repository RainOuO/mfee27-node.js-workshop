const express = require('express');
const router = express.Router();
//要加上中間件 express認得json
router.use(express.json());

module.exports = router;
