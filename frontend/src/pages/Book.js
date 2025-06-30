import { useState } from 'react';
import axios from 'axios';

export default function Book() {
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', { doctorId, date });
      alert('Appointment booked!');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleBook} className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4 font-semibold text-center">Book Appointment</h2>
      <input className="w-full p-2 mb-3 border" placeholder="Doctor ID" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
      <input className="w-full p-2 mb-4 border" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Book</button>
    </form>
  );
}