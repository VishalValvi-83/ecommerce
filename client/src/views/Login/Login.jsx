import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { gsap } from "gsap";
import loginImage from './community.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const animateLoginImage = () => {
    gsap.to(".login-image", {
      x: 10,
      duration: 2,
      ease: "bounce.out",
    });
  };

  const loginNow = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Logged in successfully!");
        localStorage.setItem('currentUser', JSON.stringify(response.data.data));
        toast.loading("Redirecting to home...");
        setTimeout(() => {
          toast.dismiss();
          window.location.href = '/';
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log('Login Error:', error);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-page">
      <Toaster />
      <div className="login-container">
        <h1 className="welcome-text">WELCOME</h1>
        <div className="login-content">
          <img src={loginImage} className="login-image" ref={animateLoginImage} alt="Login" />
          <div className="login-form">
            <h2 className="form-title">USER LOGIN</h2>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button onClick={loginNow} className="login-button">Login</button>
            <Link to='/signup' className="signup-link"> Dont have an account? SIGN UP</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
