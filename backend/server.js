const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin:true
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Extend timeout to 30 seconds
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

// User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['admin', 'faculty'], required: true },
});

const User = mongoose.model("User", userSchema); // Common model

// Booking schema and model
const bookingSchema = new mongoose.Schema({
  venue: String,
  date: String,
  time: String,
  purpose: String,
  status: { type: String, default: "Pending" },
  remark: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// Register Route
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.status(200).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email, password, role });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    res.status(200).json({ success: true, message: "Login successful!" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Booking Routes
app.post("/book", async (req, res) => {
  const { venue, date, time, purpose } = req.body;
  try {
    const booking = new Booking({ venue, date, time, purpose });
    await booking.save();
    res.status(200).json({ message: "Booking submitted!" });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Booking failed." });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const { status, remark } = req.body;

  try {
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found." });

    booking.status = status;
    booking.remark = remark || "";
    await booking.save();

    res.status(200).json({ message: `Booking ${status.toLowerCase()} successfully!` });
  } catch (error) {
    console.error("Booking update error:", error);
    res.status(500).json({ message: "Failed to update booking." });
  }
});

// Server listen
app.listen(3002, () => console.log("🚀 Server running on port 3002"));
