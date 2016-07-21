var Sequelize = require('sequelize');
var db = new Sequelize('postgres://127.0.0.1:5432/wall-o-mart');

var Item = db.define('item', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
    }
});

module.exports = {
    db: db,
    Item: Item
};