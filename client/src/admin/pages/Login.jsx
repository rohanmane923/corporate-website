import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
                <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
                    <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
                    <button className="w-full bg-corporate-navy text-white p-3 rounded font-bold">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
