const router = require('express').Router()
const { Shop } = require('../../db/models');


router.get('/', async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json({ shops });
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});

router.get('/:shopNumber', async (req, res) => {
    const { shopNumber } = req.params;
    if (isNaN(+id)) {
        return res.status(400).json({ message: 'Id не число' });
    }
    try {
        const shop = await Shop.findOne({include: shopNumber});
        res.json(shop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
