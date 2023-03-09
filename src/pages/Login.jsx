// Imports
// React imports
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  //Gets state from AuthRequired
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/host';

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        localStorage.setItem('loggedin', true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setStatus('idle');
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="border-4 border-green-400 pb-96">
      {/* Renders message if user comes from anywhere other than /login */}
      {location.state?.message && (
        <h3 className="font-bold text-xl py-8">{location.state.message}</h3>
      )}
      <h1 className="font-bold text-2xl pb-8">Sing in to your account</h1>
      {error && (
        <h3 className="font-bold text-xl text-red-600 py-4">{error.message}</h3>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-1/4 mx-auto flex flex-col gap-4"
      >
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
          type="email"
          className="bg-white border border-gray-200 rounded-md py-2 px-4"
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
          type="password"
          className="bg-white border border-gray-200 rounded-md py-2 px-4"
        />
        <button
          disabled={status === 'submitting'}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl"
        >
          {status === 'submitting' ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}

export default Login;
