// Imports
// React imports
import React from 'react';
import {
  useLocation,
  useNavigate,
  useNavigation,
  useActionData,
  Form,
} from 'react-router-dom';

// Data imports
import { loginUser } from '../api';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    return data;
  } catch (err) {
    return {
      error: err.message,
    };
  }
}

function Login() {
  //Gets state from AuthRequired
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const from = location.state?.from || '/host';

  if (data?.token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="border-4 border-green-400 pb-96">
      {/* Renders message if user comes from anywhere other than /login */}
      {location.state?.message && (
        <h3 className="font-bold text-xl py-8">{location.state.message}</h3>
      )}
      <h1 className="font-bold text-2xl pb-8">Sing in to your account</h1>
      {data?.error && (
        <h3 className="font-bold text-xl text-red-600 py-4">{data.error}</h3>
      )}
      <Form
        method="post"
        action="/login"
        className="w-1/4 mx-auto flex flex-col gap-4"
      >
        <input
          name="email"
          placeholder="Email address"
          type="email"
          className="bg-white border border-gray-200 rounded-md py-2 px-4"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className="bg-white border border-gray-200 rounded-md py-2 px-4"
        />
        <button
          type="submit"
          disabled={navigation.state === 'submitting'}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
          {navigation.state === 'submitting' ? 'Logging In...' : 'Log In'}
        </button>
      </Form>
    </div>
  );
}

export default Login;
