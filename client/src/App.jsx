import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';

export default function App() {
  return (
    <Routes>
      {/* Admin Panel Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      {/* Public Frontend Routes */}
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
}