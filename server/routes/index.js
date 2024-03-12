const express = require('express');
const router = express.Router();

const categories = require('./categories');
const comments = require('./comments');
const customers = require('./customers');
const genres = require('./genres');
const products = require('./products');
const productVariants = require('./productVariants');
const transactions = require('./transactions');

router.use('/categories', categories); //in waterfall, we have to make this also callback
router.use('/comments', comments);
router.use('/customers', customers);
router.use('/genres', genres);
router.use('/products', products);
router.use('/productvariants', productVariants);
router.use('/transactions', transactions);

module.exports = router;