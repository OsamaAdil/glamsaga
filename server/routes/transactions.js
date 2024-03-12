const express = require('express');
const router = express.Router();
// const authenticator = require('../middlewares/authenticator');

const {createTransactions, getTransactions, editTransactions, deleteTransactions} = require('../controllers/transactions');

router.post('/', createTransactions);
router.get('/', getTransactions);
router.patch('/', editTransactions);
router.delete('/', deleteTransactions);

module.exports = router;