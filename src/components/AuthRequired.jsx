// Imports
// React imports
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function AuthRequired() {
  const auth = { token: null };

  if (!auth.token) {
    return (
      <Navigate to="login" state={{ message: 'You must log in first.' }} />
    );
  }
  return <Outlet />;
}

export default AuthRequired;
