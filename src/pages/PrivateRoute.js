import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const flag = JSON.parse(localStorage.getItem('isOpen'));

  // Agar company formasi yuborilgan bo'lsa home pagega yo'naltirish
  return flag ? <Navigate to="/" /> : element;
};

export default PrivateRoute;