const router = require('express').Router();
 const shops = require('./api/shops.api.routes')


router.use('/shops', shops);

module.exports = router;
