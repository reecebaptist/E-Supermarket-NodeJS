const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    billno: {
        type: Number,
        required: true
    },
    buyerid: {
        type: String,
        required: true
    },
    itemid: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 0,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;