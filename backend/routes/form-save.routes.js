let mongoose = require('mongoose'),
    express = require('express'),
    formRouter = express.Router();

let form = require('../models/Form');

formRouter.route('/form-save').post((req, res, next) => {
    form.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

formRouter.route('/').get((req, res) => {
    form.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = formRouter;