const express = require('express');
const router = express.Router();

const categories = require('./categories');
const comments = require('./comments');
const customers = require('./customers');
const genres = require('./genres');
const products = require('./products');
const productVariants = require('./productVariants');
const transcations = require('./transaction');

router.use('/categories', categories);
router.use('/comments', comments);
router.use('/customers', customers);
router.use('/genres', genres);
router.use('/products', products);
router.use('/productvariants', productVariants);
router.use('/transcations', transcations);

module.exports = router;