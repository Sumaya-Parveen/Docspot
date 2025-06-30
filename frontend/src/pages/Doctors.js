import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid gap-4 mt-8">
      {doctors.map((doc) => (
        <div key={doc._id} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{doc.name}</h3>
          <p className="text-sm text-gray-600">{doc.specialty}</p>
        </div>
      ))}
    </div>
  );
}