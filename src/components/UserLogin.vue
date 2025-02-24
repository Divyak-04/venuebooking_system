<template>
  <div class="login-container">
    <h2>Login</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2EGfn4DS37kbZcHBtpfBHlcwVY7Xbnb90w&s" alt="College Logo" class="logo" />

    <form @submit.prevent="login">
      <div>
        <label for="role">Role:</label>
        <select v-model="role" required>
          <option value="" disabled>Select Role</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3002/login', {
          email: this.email,
          password: this.password,
          role: this.role,
        });

        if (response.data.success) {
          // Save the user's role in localStorage
          localStorage.setItem('role', this.role);

          this.successMessage = response.data.message;
          this.errorMessage = '';
          // Redirect to the home page
          this.$router.push('/');
        } else {
          this.errorMessage = response.data.message;
          this.successMessage = '';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
        this.successMessage = '';
        console.error('Error during login:', error);
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  transition: all 0.3s ease;
}

.login-container:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #3498db;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="email"], input[type="password"], select {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  transition: border-color 0.3s;
}

input[type="email"]:focus, input[type="password"]:focus, select:focus {
  border-color: #3498db;
  outline: none;
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
  width: 100%;
}

button:hover {
  background-color: #2980b9;
}

p {
  text-align: center;
  font-size: 14px;
}

p.error {
  color: red;
}

p.success {
  color: green;
}
</style>
