const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const convertHtmlToPdf = require('pdf-puppeteer');

const upload = multer();
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/htmlToPdf', upload.single('file'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('You are hitting root.');
});

app.get('/test', (req, res) => {
    res.send('You are on /test');
});

app.listen(3000, () => console.log('App is now listening on port 3000!'));
