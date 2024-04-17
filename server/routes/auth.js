const express = require('express');
const router = express.Router();

const { userSignup, userLogin } = require('../controllers/auth');

// router.post('/signup', function (req, res, next) {

//     let data = req.body;
//     userSignup(data, function (err, response) {
//         let status = 0;
//         if (err) {
            
//             status = err.status;
//             return res.status(status).send(err);
//         }
//         status = response.status;
//         return res.status(status).send(response);
//     });
// });

/* POST user logins. */
router.post('/login', function (req, res, next) {
    let data = req.body;
    
    userLogin(data, function (err, response) {
        let status = 0;
        if (err) {
            
            status = err.status;
            return res.status(status).send(err);
        }
        status = response.status;
        return res.status(status).send(response);
    });
});


module.exports = router;