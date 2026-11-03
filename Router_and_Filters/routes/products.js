const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is products page');
})

router.post('/', (req, res) => {
    res.send('this is products update page');
})

module.exports = router;