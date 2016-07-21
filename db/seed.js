var database = require('./');
var db = database.db;
var Item = database.Item;

db.sync({force: true})
    .then(function () {
        return Item.bulkCreate([
            {
                name: 'Robert Cop',
                photo: 'robert-cop.jpg',
                price: 15
            },
            {
                name: 'Michael Alone',
                photo: 'mcdonalds.jpg',
                price: 1
            },
            {
                name: 'New Style Ninja Tortoise',
                photo: 'newstyleninjatortoise.jpg',
                price: 20
            },
            {
                name: 'Creme Betweens',
                photo: 'oreo.jpg',
                price: 3
            },
            {
                name: 'Okay Shampoo and Conditioner',
                photo: 'shampoo.jpg',
                price: 6
            },
            {
                name: 'Shrek 2 Backpack',
                photo: 'shrek.jpg',
                price: 25
            },
            {
                name: 'Skerple',
                photo: 'skerple.jpg',
                price: 6
            },
            {
                name: 'Obama Hedgehog Wizard Bag',
                photo: 'wut.jpg',
                price: 20
            },
            {
                name: 'Panburger Partner',
                photo: 'panburger.jpg',
                price: 5
            }
        ]);
    })
    .then(function () {
        console.log('Seems to be done!');
    })
    .catch(console.error);

