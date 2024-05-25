const express = require('express');
const cors = require('cors');
const { Shop } = require('./db/models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
const morgan = require('morgan');

app.get('/shops', async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json({ message: 'ok', shops });
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});

app.listen(3000, () => {
    console.log(`Сервер работает на 3000 порту!!!`);
});
