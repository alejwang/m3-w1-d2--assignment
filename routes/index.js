const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('form', { title: 'Sign up form' });
});

router.post('/', 
    [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
    check('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
    ],
    (req, res) => {
        // console.log(req.body);
        const errors = validationResult(req);
        // console.log(errors, errors.isEmpty());
        if (errors.isEmpty()) {
            res.send('Thank you for your registration!')
        } else {
            res.render('form', {
                title: 'Sign up form',
                errors: errors.array(),
                data: req.body,
            });
        }
    }
);

module.exports = router;