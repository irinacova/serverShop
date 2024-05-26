const express = require('express');
const cors = require('cors');
const {Shop} = require('./db/models')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
// const morgan = require('morgan');

const indexRouterApi = require('./routes/index.routes')

app.get('/shops', async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json({ message: 'ok', shops });
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});

app.get('/shop/:id', async (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) {
        return res.status(400).json({ message: 'Id не число' });
    }
    try {
        const shop = await Shop.findByPk(id);
        res.json(shop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// app.get('/shop/:id', async (req, res) => {
//     const { id, street, houseNumber, director } = req.params;
//     if (isNaN(+id)) {
//         return res.status(400).json({ message: 'Id не число' });
//     }
//     try {
//         const shop = await Shop.findByPk(id);
//         res.json(shop);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.use('/api', indexRouterApi);

app.listen(3000, () => {
    console.log(`Сервер работает на 3000 порту!!!`);
});
