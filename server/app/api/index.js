var express = require('express');
var router = express();
var database = require('../../../db');
var Item = database.Item;
module.exports = router;

router.get('/items', function (req, res, next) {
    Item.findAll()
        .then(function (items) {
            res.send(items);
        })
        .catch(next);
});

router.get('/items/:itemName', function (req, res, next) {

    var itemName = req.params.itemName;

    Item.findOne({
            where: {
                name: itemName
            }
        })
        .then(function (foundItem) {
            if (foundItem === null) {
                return next(new Error('That is not an item!'));
            }
            res.send(foundItem);
        })
        .catch(next);

});