const express = require('express');
const router = express.Router();


router.use(express.urlencoded({ extended: true }));


router.post('/area', (req, res) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    if (!length || length <= 0 || !width || width <= 0) {
        return res.status(400).send('Invalid length or width');
    }
    const area = length * width;
    res.send(`<h1>The area of the rectangle is: ${area.toFixed(2)}</h1><a href="/">Back</a>`);
});

module.exports = router;
