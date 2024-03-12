const express = require('express');
const router = express.Router();

const { createProducts, getProducts, getProductByID, editProducts, deleteProducts } = require('../controllers/products');

router.post('/', createProducts);
router.get('/', getProducts);
router.get('/', getProductByID);
router.patch('/', editProducts);
router.delete('/', deleteProducts);

module.exports = router;