import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminLayout = () => {
    // Simple check for auth (placeholder)
    const isAuthenticated = true; 

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-corporate-navy text-white p-6">
                <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
                <nav className="space-y-2">
                    <a href="/admin" className="block p-2 hover:bg-slate-700 rounded">Dashboard</a>
                    <a href="/admin/blogs" className="block p-2 hover:bg-slate-700 rounded">Blogs</a>
                    <a href="/admin/sectors" className="block p-2 hover:bg-slate-700 rounded">Sectors</a>
                </nav>
            </aside>
            
            <div className="flex-grow flex flex-col">
                <header className="bg-white shadow p-4">
                    <h1 className="text-xl font-semibold">Management Console</h1>
                </header>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
