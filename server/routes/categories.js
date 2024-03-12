const express = require('express');
const router = express.Router();
const formatRequest = require('../middlewares/formatRequest');

const {createCategory, getCategory, editCategory, deleteCategory} = require('../controllers/categories');

router.post('/', createCategory);

router.get('/', formatRequest, function (req, res, next) {

    console.log("req.query", req.query);
    const data = req.query;
    data.req = req.data;
    console.log("data", data);
    
    getCategory(data, function(err, response) {
        if (err) {
            console.log("entered into error", err);
            return res.status(err.status).send(err);
        }
        console.log("response", response);
        // now we can manipulate the respnse we get from the getCategory
        return res.status(response.status).send(response);
    });
    // now we can apply manipulations on categoryData
    // to implement waterafall, we need waterfalls
});
// router.get('/deleted', getCategory);

router.patch('/', editCategory);
router.delete('/', deleteCategory);

module.exports = router;