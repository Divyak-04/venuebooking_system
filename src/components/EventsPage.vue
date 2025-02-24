<template>
  <div class="events-container">
    <h1>Forthcoming Events</h1>
    <p>Here are the upcoming events at our college:</p>

    <section class="events-list">
      <ul>
        <li v-for="event in events" :key="event.id">
          <h3>{{ event.title }}</h3>
          <p><strong>Venue:</strong> {{ event.venue }}</p>
          <p><strong>Date:</strong> {{ event.date }}</p>
          <p><strong>Time:</strong> {{ event.time }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventsPage',
  data() {
    return {
      events: [
        { id: 1, title: 'AI Seminar', venue: 'SF1', date: '2024-10-15', time: '10:00 AM' },
        { id: 2, title: 'Placement Training', venue: 'Conference Room', date: '2024-10-20', time: '2:00 PM' },
        { id: 3, title: 'Robotics Workshop', venue: 'SF2', date: '2024-11-02', time: '11:00 AM' },
        { id: 4, title: 'IoT Conference', venue: 'SF3', date: '2024-11-05', time: '3:00 PM' },
        { id: 5, title: 'EEE Guest Lecture', venue: 'EEE Seminar Hall', date: '2024-11-10', time: '9:30 AM' },
        { id: 6, title: 'ECE Workshop', venue: 'ECE Seminar Hall', date: '2024-11-12', time: '1:30 PM' },
        { id: 7, title: 'Agriculture Tech Talk', venue: 'Agri Seminar Hall', date: '2024-11-15', time: '10:00 AM' },
        { id: 8, title: 'Biotech Innovations', venue: 'Biotech Seminar Hall', date: '2024-11-18', time: '12:00 PM' },
        { id: 9, title: 'Textile Industry Seminar', venue: 'Textile Seminar Hall', date: '2024-11-20', time: '10:30 AM' },
        { id: 10, title: 'Cybersecurity Awareness', venue: 'SF1', date: '2024-11-22', time: '2:00 PM' },
        { id: 11, title: 'Artificial Intelligence Workshop', venue: 'SF2', date: '2024-11-24', time: '11:00 AM' },
        { id: 12, title: 'Digital Marketing Seminar', venue: 'SF3', date: '2024-11-27', time: '4:00 PM' },
        { id: 13, title: 'Main Auditorium - Alumni Meet', venue: 'Main Auditorium', date: '2024-12-01', time: '9:00 AM' },
        { id: 14, title: 'Vedanayagam Auditorium - Annual Day', venue: 'Vedanayagam Auditorium', date: '2024-12-03', time: '10:00 AM' },
        { id: 15, title: 'Data Science Workshop', venue: 'ECE Seminar Hall', date: '2024-12-05', time: '1:30 PM' },
        { id: 16, title: 'Entrepreneurship Summit', venue: 'Agri Seminar Hall', date: '2024-12-07', time: '10:00 AM' },
        { id: 17, title: 'Biotech Future Forum', venue: 'Biotech Seminar Hall', date: '2024-12-10', time: '12:00 PM' },
        { id: 18, title: 'Textile Technology Trends', venue: 'Textile Seminar Hall', date: '2024-12-13', time: '2:30 PM' },
        { id: 19, title: 'Blockchain & Crypto Symposium', venue: 'EEE Seminar Hall', date: '2024-12-15', time: '10:00 AM' },
        { id: 20, title: 'Startup Accelerator Program', venue: 'Main Auditorium', date: '2024-12-20', time: '9:30 AM' }
      ]
    };
  }
};
</script>

<style scoped>
.events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #0056b3; /* Professional Blue */
}

p {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: #555;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center events */
  gap: 20px; /* Gap between items */
  padding: 0;
  list-style-type: none;
}

li {
  background-color: #fff;
  flex: 0 0 calc(33.33% - 20px); /* Three items per row */
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #0073e6; /* Slightly darker blue */
}

p {
  font-size: 1rem;
  margin: 8px 0;
  color: #666;
}

strong {
  color: #333;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  li {
    flex: 0 0 calc(50% - 20px); /* Two items per row */
  }
}

@media (max-width: 768px) {
  li {
    flex: 0 0 100%; /* One item per row */
  }

  h1 {
    font-size: 2rem;
  }
}

</style>