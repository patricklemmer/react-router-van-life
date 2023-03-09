// Imports
// React imports
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  //Gets state from AuthRequired
  const location = useLocation();

  function handleSubmit() {
    e.preventDefault();
    console.log(loginFormData);
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
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
