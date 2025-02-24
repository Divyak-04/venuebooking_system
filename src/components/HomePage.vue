<template>
  <div class="home-container">
    <header class="header">
      <div class="logo-container">
        <img src="../components/logologo-removebg-preview.png" alt="College Logo" class="logo" />
        <h1>College Venue Booking System</h1>
      </div>
      <p>Your gateway to booking college venues for various events.</p>
    </header>

    <div class="hamburger" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>

    <nav class="navbar" :class="{ 'active': isMenuOpen }">
      <router-link to="/">Home</router-link>
      <router-link to="/events">Forthcoming Events</router-link>
      <router-link to="/facilities">Facilities</router-link>
      <router-link to="/booking">Hall Bookings</router-link>
      <router-link to="/contact">Contact</router-link>
      
      <!-- Conditionally render dashboards based on user role -->
      <router-link v-if="role === 'faculty'" to="/dashboard">Faculty Dashboard</router-link>
      <router-link v-if="role === 'admin'" to="/admin">Admin Dashboard</router-link>

      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>

    <section class="features">
      <div class="feature">
        <i class="fas fa-calendar-check feature-icon"></i>
        <h2>Book Venues Easily</h2>
        <p>Choose from a variety of college venues and book them with just a few clicks.</p>
      </div>
      <div class="feature">
        <i class="fas fa-tasks feature-icon"></i>
        <h2>Manage Your Bookings</h2>
        <p>View and manage your bookings through our user-friendly interface.</p>
      </div>
      <div class="feature">
        <i class="fas fa-bell feature-icon"></i>
        <h2>Instant Confirmation</h2>
        <p>Receive instant booking confirmations and reminders for your events.</p>
      </div>
    </section>

    <section class="cta">
      <h2 class='h22'>Ready to Book?</h2>
      <p>Find the perfect venue for your next event and book it today!</p><br>
      <router-link to="/booking" class="cta-btn">Book Now</router-link>
    </section>

    <footer class="footer">
      <p>&copy; 2024 College Venue Booking System. All rights reserved.</p>
      <p>Contact Us: <a href="mailto:support@collegebookingsystem.com">support@collegebookingsystem.com</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isMenuOpen: false,
      role: localStorage.getItem('role') || '', // Fetch user role from localStorage or any other state
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>


<style scoped>
.home-container {
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f3f7fa;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.h22 {
  color: white;
}

.header {
  background-color: #4a90e2;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  text-align: center;
  margin-right: 175px;
}

p {
  font-size: 18px;
  margin-top: 15px;
  color: #f0f4f8;
}

.hamburger {
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  background-color: #4a90e2; /* Background color to match the header */
  border-radius: 50%; /* Circular background */
  padding: 10px; /* Padding around the icon */
  color: #fff; /* Icon color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.navbar {
  position: fixed;
  left: -100%; /* Completely off-screen */
  top: 0;
  width: 250px; /* Width of the menu */
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  transition: left 0.3s ease; /* Smooth transition */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.navbar.active {
  left: 0; /* Show menu when active */
}

.navbar a {
  display: block; /* Full-width links */
  margin: 10px 0;
  color: #4a90e2;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
}

.features {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.feature {
  text-align: center;
  width: 30%;
}

.feature-icon {
  font-size: 50px;
  color: #4a90e2;
  margin-bottom: 25px;
}

.feature h2 {
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.feature p {
  font-size: 16px;
  color: #555;
}

.cta {
  text-align: center;
  padding: 50px 20px;
  background-color: #4a90e2;
  color: #fff;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cta h2 {
  font-size: 32px;
  font-weight: 700;
}

.cta p {
  font-size: 18px;
  margin-bottom: 30px;
}

.cta-btn {
  background-color: #0077b6;
  color: #ffffff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 50px;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-btn:hover {
  background-color: #005f7f;
  transform: scale(1.05);
}

.footer {
  text-align: center;
  padding: 30px;
  background-color: #f3f7fa;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 40px;
}

.footer p {
  margin: 10px 0;
  color: #888;
}

.footer a {
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #0077b6;
}
</style>
