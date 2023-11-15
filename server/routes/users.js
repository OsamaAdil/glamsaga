const express = require('express');
const router = express.Router();

const {createUsers, getUsers, editUsers, deleteUsers} = require('../controllers/users');

router.post('/', createUsers);
router.get('/', getUsers);
router.patch('/', editUsers);
router.delete('/', deleteUsers);

module.exports = router;