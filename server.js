const express = require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3004;

const router = require('./routes/index');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`server démarré sur le port ${port}`);
});

connectDB();