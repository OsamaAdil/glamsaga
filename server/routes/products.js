const express = require('express');
const router = express.Router();
// const authenticator = require('../middlewares/authenticator');
// const authenticateRole = require('../middlewares/authenticateRole');
const { createProducts, getProducts, editProducts, deleteProducts } = require('../controllers/products');

// router.use(authenticator);

router.post('/', createProducts);
router.get('/', getProducts);
router.patch('/', editProducts);
router.delete('/', deleteProducts);

module.exports = router;