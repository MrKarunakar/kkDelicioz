const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    slot: {
        type: String,
        required: true,
    },
    seats: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
})

const Booking = new mongoose.model("Booking", bookingSchema);

module.exports = Booking;