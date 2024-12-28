const express = require('express');
const router = express.Router();


router.use(express.urlencoded({ extended: true }));


router.post('/area', (req, res) => {
    const radius = parseFloat(req.body.radius);
    if (!radius || radius <= 0) {
        return res.status(400).send('Invalid radius');
    }
    const area = Math.PI * radius * radius;
    res.send(`<h1>The area of the circle is: ${area.toFixed(2)}</h1><a href="/">Back</a>`);
});

module.exports = router;
