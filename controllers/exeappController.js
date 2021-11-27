const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fteexedte = require('../models/exelist');

router.get('/', (req, res) => {
    fteexedte.find((err, docs) => {
        if (!err) {
            res.send({
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
            res.send({
                list : []
            })
        }
    });
});