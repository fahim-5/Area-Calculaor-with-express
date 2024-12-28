const express = require('express');
const app = express();
const port = 3000;

// Routers
const circleRouter = require('./routers/circle');
const rectangleRouter = require('./routers/rectangle');

// Middleware
app.use(express.static('public')); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Routes
app.use('/circle', circleRouter);
app.use('/rectangle', rectangleRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
