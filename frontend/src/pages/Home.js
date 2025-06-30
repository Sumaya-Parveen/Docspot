
import React from 'react';

function Home() {
  return (
    <div className="p-8 text-center">
      <img src="/stethoscope_heart.png" alt="Stethoscope Heart" className="mx-auto mb-6 w-40" />
      <h1 className="text-3xl font-bold mb-2">
        Welcome to <span className="text-blue-600">DocSpot</span>
      </h1>
      <p className="mb-8">Your health, your attitude, your simple friend</p>

      <h2 className="text-xl font-semibold mb-4">Our Doctors</h2>
      <div className="overflow-x-auto max-w-xl mx-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Specialization</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Dr. Rahul</td>
              <td className="px-4 py-2">Cardiologist</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Dr. Sneha</td>
              <td className="px-4 py-2">Gynecologist</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Dr. Arjun</td>
              <td className="px-4 py-2">Orthopedic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
