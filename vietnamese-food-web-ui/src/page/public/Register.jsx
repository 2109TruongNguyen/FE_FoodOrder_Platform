import React, { useState } from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { IoMail } from "react-icons/io5";
import { users } from "../../test/Datatest";
import '../../assets/CSS/Register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = (type) => {
        if (type === 'password') {
            setShowPassword(prevState => !prevState);
        } else if (type === 'confirmPassword') {
            setShowConfirmPassword(prevState => !prevState);
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleRegister();
        }
    };
    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            toast.error("Please fill in all fields.");
            return;
        }
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            toast.error("This email is already registered.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!password) {
            toast.error('Password cannot be empty.');
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        toast.success("Registration successful!");
        navigate('/login');

    };

    const handleNavigation = (type) => {
        switch (type) {
            case "login":
                navigate('/login');
                break;
            default:
                console.error('Unknown navigation type');
        }
    }

    return (
        <>
            <div className="register-container">
                <div className="register-form-container">
                    <div className="register-form">
                        <div className="register-tittle">Sign in to FOODKING</div>

                        <div className="name-input-group">
                            <div className="input-icons">
                                <FaUser size={24} className='icon-user' />
                            </div>
                            <input
                                type="text"
                                className="name-input"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={(event) => handleKeyDown(event)}
                            />
                        </div>

                        <div className="email-input-group">
                            <div className="input-icons">
                                <IoMail size={24} className='icon-user' />
                            </div>
                            <input
                                type="email"
                                className="email-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(event) => handleKeyDown(event)}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="password-input-group">
                            <div className="input-icons">
                                <RiLockPasswordFill size={24} className="icon-password" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="password-input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(event) => handleKeyDown(event)}
                            />
                            <div
                                className="eye-icon-container"
                                onClick={() => togglePasswordVisibility('password')}
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={24} className="eye-icon" />
                                ) : (
                                    <FaEye size={24} className="eye-icon" />
                                )}
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="password-input-group">
                            <div className="input-icons">
                                <RiLockPasswordFill size={24} className="icon-password" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="password-input"
                                placeholder="Enter your confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyDown={(event) => handleKeyDown(event)}
                            />
                            <div
                                className="eye-icon-container"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash size={24} className="eye-icon" />
                                ) : (
                                    <FaEye size={24} className="eye-icon" />
                                )}
                            </div>
                        </div>

                        <div className="account-link">
                            <span>Already have an account?</span>
                            <span className='sign-in-link' onClick={() => handleNavigation('login')}>Sign In</span>
                        </div>
                        <button
                            className="register-button"
                            onClick={handleRegister}
                        >
                            Sign up
                        </button>

                        <div className="social-register">
                            <span className="separator left">-----------------</span>
                            <span className="social-register-text">Or register with</span>
                            <span className="separator right">-----------------</span>
                        </div>

                        <div className="google-register-button">
                            <div className="google-register-icons">
                                <FaGoogle size={25} className='icon-google' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
