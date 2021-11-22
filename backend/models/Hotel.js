const mongoose = require("mongoose");

const HotelReservationSchema = new mongoose.Schema(
  {
    hotel: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: false,
    },
    datebought: {
      type: Date,
      default: Date.now
    },
    checkIn: {
      type: String,
      required: false,
    },
    checkOut: {
      type: String,
      required: false,
    },
    adults: {
      type: String,
      required: false,
    },
    children: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HotelReservation", HotelReservationSchema);