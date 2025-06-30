
import React, { useState } from 'react';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} with ${formData.doctor} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="doctor" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Doctor</option>
          <option value="Dr. Rahul">Dr. Rahul (Cardiologist)</option>
          <option value="Dr. Sneha">Dr. Sneha (Gynecologist)</option>
          <option value="Dr. Arjun">Dr. Arjun (Orthopedic)</option>
        </select>
        <input type="date" name="date" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="time" name="time" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
      </form>
    </div>
  );
}

export default Appointment;
