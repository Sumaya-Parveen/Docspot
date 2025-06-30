import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert('Login successful!');
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4 font-semibold text-center">Login</h2>
      <input className="w-full p-2 mb-3 border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-4 border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
    </form>
  );
}