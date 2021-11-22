const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/users")
const flightRoute = require("./routes/flights")
const hotelRoute = require("./routes/hotels")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage ({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post("/backend/upload", upload.single("file"), (req, res) => {
    res.status(200).json ("File uploaded!")
})

mongoose.connect('mongodb://localhost/travel');

app.use("/backend/auth", authRouter)
app.use("/backend/users", userRouter)
app.use("/backend/flights", flightRoute)
app.use("/backend/hotels", hotelRoute)
app.use("/backend/categories", categoryRoute)

app.listen("5000", () => {
    console.log("Backend SIUUUUU");
})