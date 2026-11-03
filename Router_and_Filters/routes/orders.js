const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is orders page");
})

router.post('/', (req, res) => {
    res.send("Update order page");
})

module.exports = router;