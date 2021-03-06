const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');

router.get('', function(req, res) {
    Rental.find({}, function(err, foundRentals) {
        res.json(foundRentals);
    });
});

router.get('/:id', function(req, res) {
    const rentalId = req.params.id;
    Rental.findById(rentalId, function(err, foundRentals) {
        if(err) {
            res.status(422).send({error:[{title:'Rental', details:'Couldn\'t find rental'}]});
        }
        res.json(foundRentals);
    });
});

module.exports = router;
