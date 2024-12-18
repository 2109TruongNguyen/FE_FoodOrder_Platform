import React, { useState } from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";
import './Register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const togglePasswordVisibility = (type) => {
        if (type === 'password') {
            setShowPassword(prevState => !prevState);
        } else if (type === 'confirmPassword') {
            setShowConfirmPassword(prevState => !prevState);
        }
    };

    const navigate = useNavigate();
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
            <Header />
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
                        <div className="register-button">Sign up</div>

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
            <Footer />
        </>
    );
};

export default Register;
