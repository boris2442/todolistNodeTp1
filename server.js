const express = require('express');
const app = express();

const port = 3004;

const router = require('./routes/index');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`server démarré sur le port ${port}`);
});