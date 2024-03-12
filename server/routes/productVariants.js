const express = require('express');
const router = express.Router();

const { createProductVariants, getProductVariants, getProductVariantsByID, editProductVariants, deleteProductVariants } = require('../controllers/productVariants');

router.post('/', createProductVariants);
router.get('/', getProductVariants);
router.get('/', getProductVariantsByID);
router.patch('/', editProductVariants);
router.delete('/',deleteProductVariants);

module.exports = router;