const express = require('express');
const router = express.Router();

const {createComments, getComments, editComments, deleteComments} = require('../controllers/comments');

router.post('/', createComments);
router.get('/', getComments);
router.patch('/', editComments);
router.delete('/', deleteComments);

module.exports = router;