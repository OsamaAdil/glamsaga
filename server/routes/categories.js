const express = require('express');
const router = express.Router();

const {createCategory, getCategory, editCategory, deleteCategory} = require('../controllers/categories');

router.post('/', createCategory);
router.get('/', getCategory);
router.patch('/', editCategory);
router.delete('/', deleteCategory);

module.exports = router;