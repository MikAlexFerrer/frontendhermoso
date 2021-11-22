const router = require("express").Router();
const User = require("../models/User");
const Flight = require("../models/Flight");

//CREATE FLIGHT RESERVATION
router.post("/", async (req, res) => {
  const newFlight = new Flight(req.body);
  try {
    const savedFlight = await newFlight.save();
    res.status(200).json(savedFlight);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE FLIGHT RESERVATION
router.put("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight.username === req.body.username) {
      try {
        const updatedFlight = await Flight.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedFlight);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FLIGHT RESERVATION
router.delete("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight.username === req.body.username) {
      try {
        await flight.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FLIGHT RESERVATION
router.get("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FLIGHTS RESERVATION
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let flights;
    if (username) {
        flights = await Flight.find({ username });
    } else if (catName) {
        flights = await Flight.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
        flights = await Flight.find();
    }
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;