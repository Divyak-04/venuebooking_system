<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard - Manage Bookings</h1>

    <div v-if="bookings.length">
      <h2>Booking Details</h2>
      <table>
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Action</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking._id">
            <td>{{ booking.venue }}</td>
            <td>{{ booking.date }}</td>
            <td>{{ booking.time }}</td>
            <td>{{ booking.purpose }}</td>
            <td>
              <span v-if="booking.status === 'Approved'" class="approved-status">
                ✔️ Approved
              </span>
              <span v-else-if="booking.status === 'Rejected'" class="rejected-status">
                ❌ Rejected
              </span>
              <span v-else>
                Pending
              </span>
            </td>
            <td class="action-buttons">
              <button v-if="booking.status === 'Pending'" @click="approveBooking(booking)" class="approve-button">
                Approve
              </button>
              <button v-if="booking.status === 'Pending'" @click="promptReject(booking)" class="reject-button">
                Reject
              </button>
            </td>
            <td>
              <span v-if="booking.status === 'Rejected'">{{ remarks[booking._id] }}</span>
              <input v-if="booking.status === 'Rejected'" type="text" v-model="remarks[booking._id]" placeholder="Enter remark" />
            </td>
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
  name: 'AdminDashboardPage',
  data() {
    return {
      bookings: [], // List of all bookings
      remarks: {},  // Store remarks for each booking
    };
  },
  methods: {
    // Fetch the list of bookings from the server
    async fetchBookings() {
      try {
        const response = await axios.get('http://localhost:3002/bookings');
        this.bookings = response.data;
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    },
    
    // Approve a booking and update the status locally and on the server
    async approveBooking(booking) {
      try {
        const response = await axios.patch(`http://localhost:3002/bookings/${booking._id}`, { status: 'Approved' });
        console.log('Approve response:', response.data); // Log the response
        booking.status = 'Approved'; // Update local status to reflect the change
        eventBus.emit('booking-updated'); // Emit event to notify other components
      } catch (error) {
        console.error('Error approving booking:', error);
      }
    },

    // Prompt the user to provide a remark before rejecting a booking
    promptReject(booking) {
      const userRemark = prompt('Please enter a remark for rejection:');
      if (userRemark) {
        this.remarks[booking._id] = userRemark; // Store the remark
        this.rejectBooking(booking, userRemark); // Pass the remark to the reject method
      }
    },

    // Reject a booking and update the status and remark locally and on the server
    async rejectBooking(booking, remark) {
      try {
        const response = await axios.patch(`http://localhost:3002/bookings/${booking._id}`, { status: 'Rejected', remark });
        console.log('Reject response:', response.data); // Log the response
        booking.status = 'Rejected'; // Update local status to reflect the change
        eventBus.emit('booking-updated'); // Emit event to notify other components
      } catch (error) {
        console.error('Error rejecting booking:', error);
      }
    },
  },
  mounted() {
    // Fetch the bookings when the component is mounted
    this.fetchBookings();
  },
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #ccc;
}

th,
td {
  padding: 10px;
  text-align: left;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.approve-button,
.reject-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s;
}

.approve-button {
  background-color: #4caf50;
}

.approve-button:hover {
  background-color: #45a049;
}

.reject-button {
  background-color: #f44336;
}

.reject-button:hover {
  background-color: #d32f2f;
}

.approved-status {
  color: green;
  font-weight: bold;
}

.rejected-status {
  color: red;
  font-weight: bold;
}
</style>
