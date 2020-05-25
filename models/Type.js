const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    quantity: {
        type: 'String',
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const Type = mongoose.model('Type', TypeSchema);

module.exports = Type;