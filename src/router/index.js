// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import UserLogin from "../components/UserLogin.vue";
import UserRegister from "../components/UserRegister.vue";
import FacilitiesPage from "../components/FacilitiesPage.vue";
import EventPage from "../components/EventsPage.vue";
import BookingPage from "../components/BookingPage.vue";
import ContactPage from "../components/ContactPage.vue";
import DashboardPage from '../components/DashboardPage.vue';
import SuccessPage from '../components/SuccessPage.vue';
import AdminDashboardpage from '../components/AdminDashboardPage.vue';  // Use the correct name

// Define routes
const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: UserLogin },
  { path: "/register", component: UserRegister },
  { path: "/booking", component: BookingPage },
  { path: "/events", component: EventPage },
  { path: "/facilities", component: FacilitiesPage },
  { path: "/contact", component: ContactPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/success', component: SuccessPage },
  { path: '/admin', component: AdminDashboardpage } // Dashboard route
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export router to be used in main.js
export default router;
