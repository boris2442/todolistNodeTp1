const express = require('express');
const connectDB=require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



const port = 3004;
// const port = process.env.PORT || 3000;

const router = require('./routes/index');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`server démarré sur le port ${port}`);
});

connectDB();