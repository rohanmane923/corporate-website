import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../admin/pages/Dashboard';
import Login from '../admin/pages/Login';

// Placeholder components for admin sub-pages
const AdminPlaceholder = ({ title }) => (
    <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>This is the management interface for {title.toLowerCase()}.</p>
    </div>
);

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Public Admin Routes */}
            <Route path="login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                
                {/* Blog Management */}
                <Route path="blogs" element={<AdminPlaceholder title="Blog Management" />} />
                <Route path="blogs/create" element={<AdminPlaceholder title="Create Blog" />} />
                
                {/* Sector Management */}
                <Route path="sectors" element={<AdminPlaceholder title="Sector Management" />} />
                
                {/* Job Management */}
                <Route path="jobs" element={<AdminPlaceholder title="Job Management" />} />
                
                {/* Governance Management */}
                <Route path="governance" element={<AdminPlaceholder title="Governance Management" />} />
                
                {/* Media Management */}
                <Route path="media" element={<AdminPlaceholder title="Media Library" />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
