// Imports
// React imports
import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (data?.token) {
      navigate(from, { replace: true });
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white border border-gray-200 rounded-md shadow-md p-6 space-y-4 w-full max-w-sm">
        {/* Renders message if user comes from anywhere other than /login */}
        {location.state?.message && (
          <h3 className="font-bold text-xl text-red-600 py-2">
            {location.state.message}
          </h3>
        )}

        <h1 className="font-bold pb-4 text-center text-xl sm:text-2xl">
          Sign in to your account
        </h1>

        {data?.error && (
          <h3 className="font-bold text-xl text-red-600 py-4">{data.error}</h3>
        )}
        <div>
          <p className="text-sm">
            To log in, use the username:{' '}
            <span className="font-bold">user@vanlife.com</span> and password:{' '}
            <span className="font-bold">van123</span>.
          </p>
        </div>

        <Form method="post" action="/login" className="flex flex-col gap-4">
          <input
            name="email"
            placeholder="Email address"
            type="email"
            autoComplete="username"
            className="bg-gray-50 border border-gray-200 rounded-md py-2 px-4"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            className="bg-gray-50 border border-gray-200 rounded-md py-2 px-4"
          />
          <button
            type="submit"
            disabled={navigation.state === 'submitting'}
            className="bg-orange-500 disabled:bg-orange-300 text-white py-2 px-4 rounded-md font-bold text-center text-lg sm:text-xl disabled:cursor-not-allowed"
          >
            {navigation.state === 'submitting' ? 'Logging In...' : 'Log In'}
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;

// {/* <div className="border-4 border-red-400 pt-48 pb-48">
// {/* Renders message if user comes from anywhere other than /login */}
// {location.state?.message && (
//   <h3 className="font-bold text-xl py-8">{location.state.message}</h3>
// )}
// <h1 className="font-bold pb-8 text-lg sm:text-2xl">
//   Sing in to your account
// </h1>
// {data?.error && (
//   <h3 className="font-bold text-xl text-red-600 py-4">{data.error}</h3>
// )}
// <Form
//   method="post"
//   action="/login"
//   className="w-1/4 mx-auto flex flex-col gap-4"
// >
//   <input
//     name="email"
//     placeholder="Email address"
//     type="email"
//     autoComplete="username"
//     className="bg-white border border-gray-200 rounded-md py-2 px-4"
//   />
//   <input
//     name="password"
//     placeholder="Password"
//     type="password"
//     autoComplete="current-password"
//     className="bg-white border border-gray-200 rounded-md py-2 px-4"
//   />
//   <button
//     type="submit"
//     disabled={navigation.state === 'submitting'}
//     className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl disabled:bg-orange-300 disabled:cursor-not-allowed"
//   >
//     {navigation.state === 'submitting' ? 'Logging In...' : 'Log In'}
//   </button>
// </Form>
// </div> */}
