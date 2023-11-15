const express = require('express');
const router = express.Router();
// const authenticator = require('../middlewares/authenticator');

const {createGenres, getGenres, editGenres, deleteGenres} = require('../controllers/genres');

router.post('/', createGenres);
router.get('/', getGenres);
router.patch('/', editGenres);
router.delete('/', deleteGenres);

module.exports = router;