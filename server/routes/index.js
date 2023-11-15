const express = require('express');
const router = express.Router();

const genres = require('./genres');
const orders = require('./orders');
const products = require('./products');
const productVariants = require('./productVariants');
const transcations = require('./transaction');
const users = require('./users');

router.use('/genres', genres);
router.use('/orders', orders);
router.use('/products', products);
router.use('/productvariants', productVariants);
router.use('/transcations', transcations);
router.use('/users', users);

module.exports = router;