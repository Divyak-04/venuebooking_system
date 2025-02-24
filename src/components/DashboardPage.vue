<template>
  <div class="dashboard">
    <h1>Faculty Dashboard - Your Bookings</h1>

    <div v-if="bookings.length">
      <h2>Your Booking Details</h2>
      <table>
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Remark (If Rejected)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking._id">
            <td>{{ booking.venue }}</td>
            <td>{{ booking.date }}</td>
            <td>{{ booking.time }}</td>
            <td>{{ booking.purpose }}</td>
            <td>{{ booking.status }}</td>
            <td v-if="booking.status === 'Rejected'">{{ booking.remark }}</td>
            <td v-else>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No bookings found.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import eventBus from '@/eventBus';

export default {
  name: 'DashboardPage',
  data() {
    return {
      bookings: [],
    };
  },
  methods: {
    async fetchBookings() {
      try {
        const response = await axios.get(`http://localhost:3002/bookings`);
        this.bookings = response.data;
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    },
    handleBookingUpdate() {
      this.fetchBookings(); // Refresh bookings when admin updates
    }
  },
  mounted() {
    this.fetchBookings();
    eventBus.on('booking-updated', this.handleBookingUpdate); // Listen for booking update
  },
  beforeUnmount() {
    eventBus.off('booking-updated', this.handleBookingUpdate); // Clean up the event listener
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ccc;
}

th, td {
  padding: 10px;
  text-align: left;
}
</style>
