import { useState } from 'react';
import '../../assets/CSS/Login.scss';
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";
import { FaGoogle } from "react-icons/fa6";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import vietnameseFood from "../../assets/image/vietnamesefood.png"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const toggleCheckbox = () => {
        setIsChecked(prevState => !prevState);
    };


    const navigate = useNavigate();
    const handleNavigation = (type) => {
        switch (type) {
            case "register":
                navigate('/register');
                break;
            case "homepage":
                navigate('/');
                break;
            default:
                console.error('Unknown navigation type');
        }
    }
    return (
        <>
            <div className="login-container">
                <img className="auth-image" src={vietnameseFood} />
                <button className="image-button" onClick={() => handleNavigation('homepage')}>Return</button>
                <div className="login-form-container">
                    <div className="login-form">
                        <div className="login-tittle">Sign in to FOODKING</div>
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
                        <div className="password-input-group">
                            <div className="input-icons">
                                <RiLockPasswordFill size={24} className="icon-password" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="password-input"
                                placeholder="Enter your password"
                            />
                            <div className="eye-icon-container" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <FaEyeSlash size={24} className="eye-icon" />
                                ) : (
                                    <FaEye size={24} className="eye-icon" />
                                )}
                            </div>
                        </div>
                        <div className="form-ask">
                            <div onClick={toggleCheckbox} className="checkbox-container">
                                {isChecked ? (
                                    <IoMdCheckbox size={24} className='checkbox-icon' />
                                ) : (
                                    <MdCheckBoxOutlineBlank size={24} className='checkbox-icon' />
                                )}
                            </div>
                            <div class="flex-gap">
                                <span className="remember-me">Remember me</span>
                                <span className="forgot-password">Forgot Password</span>
                            </div>
                        </div>
                        <div className="account-link">
                            <span>Don’t have an account?</span>
                            <span className='sign-up-link' onClick={() => handleNavigation('register')}>Sign Up</span>
                        </div>
                        <div className="login-button">LOGIN</div>
                        <div className="social-login">
                            <span className="separator left">-----------------</span>
                            <span className="social-login-text">Or login with</span>
                            <span className="separator right">-----------------</span>
                        </div>
                        <div className="google-login-button">
                            <div className="google-login-icons">
                                <FaGoogle size={25} className='icon-google' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;