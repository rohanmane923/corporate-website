import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Footer placeholder */}
            <footer className="bg-corporate-navy text-white py-12 px-4 text-center">
                <p>&copy; 2024 Noisto Corporate. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
