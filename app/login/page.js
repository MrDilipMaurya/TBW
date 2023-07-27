
"use client";
import { useState } from 'react';
import { login } from '../api/login'
import supabase from "../supabase";
import "./login.css";
import { useRouter } from 'next/navigation'; // Import useRouter
import Image from 'next/image';
import logo from '../../public/assets/img/tb-logo-black.svg'
import React from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Initialize the useRouter hook

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw new Error(error.message);
            }

            // Handle successful login, e.g., redirect to dashboard
            console.log('Logged in user:', user);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };
    return (
        <>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-form">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width="250"
                                    height="61"
                                />
                                <form action="#">
                                    <input
                                        className="form-control"
                                        id="form1"
                                        type="email"
                                        placeholder="Email Address"
                                        // onChange={updateEmail}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        className="form-control"
                                        id="form2"
                                        placeholder="Password"
                                        // onChange={updatePassword}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                    />
                                    <button className="login-btn "
                                        onClick={(e) => handleLogin(e)}
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
