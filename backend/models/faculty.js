const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['faculty', 'admin'], required: true },  // Added 'role' field with validation
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
