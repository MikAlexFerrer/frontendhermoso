const mongoose = require("mongoose");

const FlightReservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
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
    arrival: {
      type: String,
      required: false,
    },
    departure: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FlightReservation", FlightReservationSchema);