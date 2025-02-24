<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p class="intro-text">
      If you have any queries or need assistance with venue bookings, feel free to reach out to us:
    </p>

    <section class="contact-info">
      <p><strong>Email:</strong> support@collegebookingsystem.com</p>
      <p><strong>Phone:</strong> +91 123 456 7890</p>
      <p><strong>Office Location:</strong> Block C, Room 101</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #333;
}

h1 {
  color: #0056b3;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
}

.contact-info {
  background-color: #e0f0ff;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
  color: #003366;
}

.contact-info p {
  margin: 10px 0;
}

.contact-info strong {
  color: #0056b3;
}

p {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
  }

  h1 {
    font-size: 24px;
  }

  .intro-text, .contact-info p {
    font-size: 14px;
  }
}
</style>
