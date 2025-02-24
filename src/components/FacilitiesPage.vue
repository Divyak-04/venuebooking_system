<template>
  <div class="facilities-container">
    <h1>Venue Facilities</h1>
    <p>Explore the facilities available at our college venues:</p>

    <section class="facilities-list">
      <ul>
        <li v-for="facility in facilities" :key="facility.name">
          <h3>{{ facility.name }}</h3>
          <p><strong>Location:</strong> {{ facility.location }}</p>
          <p><strong>Capacity:</strong> {{ facility.capacity }}</p>
          <p><strong>Included:</strong> {{ facility.facilities }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FacilitiesPage',
  data() {
    return {
      facilities: [
        { name: 'Seminar Hall 1', location: 'Block A', capacity: '200', facilities: 'Podium, Mic, Sound System, Projector' },
        { name: 'Conference Room', location: 'Block B', capacity: '100', facilities: 'Mic, Projector, Guest Room' },
        { name: 'Main Auditorium', location: 'Block C', capacity: '1000', facilities: 'Stage, Lighting, Sound System, Projector' },
        { name: 'Open Air Theatre', location: 'Campus Center', capacity: '1500', facilities: 'Stage, Outdoor Sound System' },
        { name: 'Seminar Hall 2', location: 'Block D', capacity: '150', facilities: 'Projector, Mic, Podium' },
        { name: 'Computer Lab 1', location: 'IT Block', capacity: '60', facilities: 'Computers, Projector, Internet' },
        { name: 'Biotech Lab', location: 'Biotech Block', capacity: '80', facilities: 'Microscope, Chemical Supplies, Projector' },
        { name: 'Chemistry Lab', location: 'Science Block', capacity: '90', facilities: 'Chemicals, Microscopes, Lab Equipment' },
        { name: 'Physics Lab', location: 'Science Block', capacity: '70', facilities: 'Instruments, Projector, Lab Equipment' },
        { name: 'Mechanical Workshop', location: 'Engineering Block', capacity: '50', facilities: 'Tools, Machines, Safety Equipment' },
        { name: 'Electrical Lab', location: 'EEE Block', capacity: '60', facilities: 'Transformers, Wiring Kits, Projector' },
        { name: 'Civil Engineering Lab', location: 'Civil Block', capacity: '40', facilities: 'Survey Equipment, Testing Tools' },
        { name: 'Textile Lab', location: 'Textile Block', capacity: '80', facilities: 'Weaving Machine, Yarn, Projector' },
        { name: 'Robotics Lab', location: 'Robotics Block', capacity: '50', facilities: 'Robots, Arduino Kits, Projector' },
        { name: 'Design Studio', location: 'Design Block', capacity: '30', facilities: 'Computers, Design Software, Projector' },
        { name: 'Language Lab', location: 'Language Block', capacity: '100', facilities: 'Computers, Headphones, Projector' },
        { name: 'ECE Lab', location: 'ECE Block', capacity: '80', facilities: 'Circuits, Oscilloscope, Projector' },
        { name: 'Mechanical Drawing Hall', location: 'Engineering Block', capacity: '120', facilities: 'Drawing Boards, Projector' },
        { name: 'Library', location: 'Main Building', capacity: '500', facilities: 'Books, Computers, Study Areas' },
        { name: 'Gymnasium', location: 'Sports Complex', capacity: '100', facilities: 'Gym Equipment, Lockers, Showers' }
      ]
    };
  }
};
</script>

<style scoped>
.facilities-container {
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
  justify-content: center; /* Center facilities */
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
