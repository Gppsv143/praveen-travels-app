const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    name: String,
    source: String,
    destination: String,
    date: Date,
    price: Number,
});

module.exports = mongoose.model('Bus', busSchema);
