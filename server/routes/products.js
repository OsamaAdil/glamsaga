const express = require('express');
const router = express.Router();

const { createProducts, getProducts, editProducts, deleteProducts } = require('../controllers/products');

router.post('/', createProducts);
router.get('/', getProducts);
router.patch('/', editProducts);
router.delete('/', deleteProducts);

module.exports = router;