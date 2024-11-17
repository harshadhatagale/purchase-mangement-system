"use client"
import React from 'react'
import { useState } from 'react'
export default function LoginForm() {
    const [form, setForm] = useState({ username: "", password: "", role: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/login/",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            }
        )
        const data = await res.json()
        if (res.ok) {
            localStorage.setItem("token", data.token)
            alert(data.message)
        }
        else {
            alert(data.message)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Welcome to the Purchase Management System
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Role
                        </label>
                        <select
                            name="role"
                            id="role"
                            value={form.role} // Bind the state
                            onChange={handleChange} // Update the state on change
                            required
                            className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Select your role
                            </option>
                            <option value="admin">Admin</option>
                            <option value="principle">Principle</option>
                            <option value="hod">HOD</option>
                            <option value="os">OS</option>
                            <option value="registrar">Registrar</option>
                            <option value="other">Other</option>
                        </select>

                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
