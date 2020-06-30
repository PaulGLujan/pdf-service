const express = require('express');
const convertHtmlToPdf = require('pdf-puppeteer');
const app = express();

app.get('/test', (req, res) => {
    res.send('You are on /test');
});

app.listen(3000, () => console.log('App is now listening on port 3000!'));
