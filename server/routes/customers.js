const express = require('express');
const router = express.Router();

const {createCustomers, getCustomers, editCustomers, deleteCustomers} = require('../controllers/customers');

router.post('/', createCustomers);
router.get('/', getCustomers);
router.patch('/', editCustomers);
router.delete('/', deleteCustomers);

module.exports = router;