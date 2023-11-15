const express = require('express');
const router = express.Router();
// const authenticator = require('../middlewares/authenticator');

const {createOrders, getOrders, editOrders, deleteOrders} = require('../controllers/orders');

router.post('/', createOrders);
router.get('/', getOrders);
router.patch('/', editOrders);
router.delete('/', deleteOrders);

module.exports = router;