const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')

router.use(productsController.productNotFound);

module.exports = router;