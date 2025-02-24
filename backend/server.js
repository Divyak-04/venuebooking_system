const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection


mongoose.connect('mongodb://localhost:27017/venue')
.then(() => console.log('Connected to MongoDB (venue database)'))
.catch((err) => console.error('Could not connect to MongoDB', err));


// Create a Mongoose schema for user registration
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
});

// Create Mongoose models for users
const Faculty = mongoose.model("Faculty", userSchema, "faculties");
const Admin = mongoose.model("Admin", userSchema, "admins");

// Create a Mongoose schema for bookings
const bookingSchema = new mongoose.Schema({
  venue: String,
  date: String,
  time: String,
  purpose: String,
  status: { type: String, default: "Pending" }, // Booking status (Pending, Approved, Rejected)
  remark: String, // Admin's remark for rejection
});

// Create a Mongoose model for bookings
const Booking = mongoose.model("Booking", bookingSchema, "bookings");

// Route to handle user registration
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    let newUser;
    if (role === "admin") {
      newUser = new Admin({ username, email, password, role });
    } else if (role === "faculty") {
      newUser = new Faculty({ username, email, password, role });
    } else {
      return res.status(400).json({ message: "Invalid role." });
    }

    await newUser.save();
    res.status(200).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Registration failed." });
  }
});

// Route to handle user login
app.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;
    if (role === "admin") {
      user = await Admin.findOne({ email, password });
    } else if (role === "faculty") {
      user = await Faculty.findOne({ email, password });
    } else {
      return res.status(400).json({ success: false, message: "Invalid role." });
    }

    if (user) {
      res.status(200).json({ success: true, message: "Login successful!" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Login failed." });
  }
});

// Route to handle booking submission
app.post("/book", async (req, res) => {
  const { venue, date, time, purpose } = req.body;
  console.log("Received booking data:", req.body); // Log the received data
  try {
    const newBooking = new Booking({ venue, date, time, purpose });
    await newBooking.save();
    res.status(200).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.error("Error submitting booking:", error);
    res.status(500).json({ message: "Booking submission failed." });
  }
});

// Start the server



// Route to get all bookings (for admin to view)
app.get('/bookings', async (req, res) => {
  const facultyId = req.query.facultyId;
  try {
    const bookings = await Booking.find({ facultyId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route to update booking status (approve or reject)
app.put("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const { status, remark } = req.body;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    booking.status = status;
    booking.remark = remark || "";

    await booking.save();
    res.status(200).json({ message: `Booking ${status.toLowerCase()} successfully!` });
  } catch (error) {
    console.error("Error updating booking status:", error);
    res.status(500).json({ message: "Failed to update booking status." });
  }
});

app.patch('/bookings/:id', async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { status, remark } = req.body;

    // Update the booking's status and remark in the database
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status, remark },
      { new: true } // This returns the updated document
    );

    res.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).send('Server error');
  }
});


// Start the server
app.listen(3002, () => {
  console.log("Server running on port 3002");
});
