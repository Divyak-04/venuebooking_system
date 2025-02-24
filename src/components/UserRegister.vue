<template>
  <div class="register-container">
    <h2>Register</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2EGfn4DS37kbZcHBtpfBHlcwVY7Xbnb90w&s" alt="College Logo" class="logo" />
    <form @submit.prevent="registerUser">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      
      <div class="role-container">
        <label>Role:</label>
        <label>
          <input type="radio" v-model="role" value="faculty" required /> Faculty
        </label>
        <label>
          <input type="radio" v-model="role" value="admin" required /> Admin
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login here</router-link></p>
  </div>
</template>



<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "UserRegister",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      role: "", // Add role to data
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post("http://localhost:3002/register", {
          username: this.username,
          email: this.email,
          password: this.password,
          role: this.role, // Include role in the request
        });
        alert(response.data.message); // Changed alert message
        this.router.push("/login"); // Redirect to login page
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Registration failed. Please try again.");
      }
    },
  },
};
</script>


<style>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  transition: all 0.3s ease;
}

.register-container:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #3498db;
}

input {
  padding: 12px;
  margin-bottom: 15px; /* Reduced bottom margin for better spacing */
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  transition: border-color 0.3s;
  width: 100%; /* Full width */
  box-sizing: border-box; /* Include padding in width */
}

input:focus {
  border-color: #3498db;
  outline: none;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  width: 150px;
  height: auto;
}

button {
  padding: 12px;
  border: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%; /* Full width */
}

button:hover {
  background-color: #2980b9;
}

.role-container {
  display: flex; /* Use flexbox to align items in a row */
  align-items: center; /* Center align vertically */
  margin-bottom: 20px; /* Space below the role options */
}

.role-container label {
  margin-left: 10px; /* Space between the Role label and radio buttons */
}

.role-container label:first-child {
  margin-right: 15px; /* Space between the Role label and first radio button */
}

p {
  text-align: center;
  font-size: 14px;
}


</style> 