import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/Context';

function PrivateRole({ children }) {
  const { role } = useContext(AppContext);
  const location = useLocation(); // Use useLocation instead of window.location.pathname

  const roleRoutes = {
    Admin: [
      '/dashboard/new-testimonial',
      '/dashboard/all-testimonials',
      '/dashboard/new-activity',
      '/dashboard/all-activities',
      '/dashboard/users',
    ],
    Core: ['/dashboard/new-event', '/dashboard/events'],
    Accountant: ['/dashboard/new-transaction', '/dashboard/past-transactions'],
  };

  console.log('Current role:', role);
  console.log('Current path:', location.pathname);

  // Check if roleRoutes exist for the role and if the path is valid
  const isAllowedRoute = role && roleRoutes[role]?.includes(location.pathname);

  return (
    <>
      {isAllowedRoute ? children : <Navigate to="/profile" />} {/* Redirect to Profile Page */}
    </>
  );
}

export default PrivateRole;
