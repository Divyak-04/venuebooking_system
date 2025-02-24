<template>
    <div class="success-container">
      <div class="success-message">
        <i class="fas fa-check-circle"></i>
        <h1>Your Booking Has Been Done!</h1>
        <p>Please wait for the approval.</p>
        <router-link to="/" class="btn-ok">OK</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SuccessPage',
  };
  </script>
  
  <style scoped>
  .success-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f8ff;
    font-family: 'Roboto', sans-serif;
  }
  
  .success-message {
    text-align: center;
    background-color: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }
  
  .success-message i {
    font-size: 60px;
    color: #4caf50;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }
  
  .btn-ok {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .btn-ok:hover {
    background-color: #0056b3;
  }
  </style>
  
  