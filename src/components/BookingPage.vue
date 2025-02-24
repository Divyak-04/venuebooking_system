<template>
  <div class="booking-container">
    <h1>Book a Venue</h1>
    <form @submit.prevent="submitBooking">
      <div class="form-group">
        <label for="venue">Select Venue</label>
        <select v-model="form.venue" required>
          <option value="" disabled>Select a venue</option>
          <option value="Seminar Hall 1">Seminar Hall 1</option>
          <option value="Conference Room">Conference Room</option>
          <option value="Main Auditorium">Main Auditorium</option>
          <option value="Vedanayagam Auditorium">Vedanayagam Auditorium</option>
          <option value="Agri Seminar Hall">Agri Seminar Hall</option>
          <option value="ECE Seminar Hall">ECE Seminar Hall</option>
          <option value="EEE Seminar Hall">EEE Seminar Hall</option>
          <option value="Biotech Seminar Hall">Biotech Seminar Hall</option>
          <option value="Textile Seminar Hall">Textile Seminar Hall</option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Event Date</label>
        <input type="date" v-model="form.date" required />
      </div>

      <div class="form-group">
        <label for="time">Event Time</label>
        <input type="time" v-model="form.time" required />
      </div>

      <div class="form-group">
        <label for="purpose">Event Purpose</label>
        <textarea v-model="form.purpose" placeholder="Describe the event purpose" required></textarea>
      </div>

      <button type="submit" class="btn-submit">Submit Booking</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        venue: '',
        date: '',
        time: '',
        purpose: ''
      }
    };
  },
  methods: {
    submitBooking() {
      console.log(this.form); // Log the form data
      axios.post('http://localhost:3002/book', this.form)
        .then(response => {
          if (response.data && response.data.message) {
            alert(response.data.message);

            // Store the booking data in local storage
            let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            bookings.push(this.form);
            localStorage.setItem('bookings', JSON.stringify(bookings));

            this.$router.push("/success"); // Redirect to DashboardPage
          } else {
            throw new Error('Unexpected response format');
          }
        })
        .catch(error => {
          console.error('There was an error!', error);
          alert('Booking submission failed. Please try again.');
        });
    }
  }
}
</script>

<style scoped>
.booking-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

select, input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  margin-top: 5px;
}

textarea {
  min-height: 100px;
}

input[type="date"], input[type="time"] {
  padding: 10px;
}

select {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path d='M7 10l5 5 5-5z' fill='%23666'/></svg>") no-repeat right 10px center;
  background-color: #fff;
}

button.btn-submit {
  padding: 12px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.btn-submit:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .booking-container {
    padding: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>
