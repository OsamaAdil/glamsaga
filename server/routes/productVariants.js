const express = require('express');
const router = express.Router();
// const authenticator = require('../middlewares/authenticator');
// const authenticator = require('../middlewares/authentication');
const { createProductVariants, getProductVariants, editProductVariants, deleteProductVariants } = require('../controllers/productVariants');

// router.use(authenticator);

router.post('/', createProductVariants );
router.get('/', getProductVariants);
router.patch('/', editProductVariants);
router.delete('/',deleteProductVariants);

module.exports = router;