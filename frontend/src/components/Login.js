import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Particles from "./Particles"; // Import the Particles component
import backgroundImage from "./card_img.jpg"; // Import the background image
import "./Login.css"; // Import the CSS file for styling

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      setToken(res.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundColor: "#000", // Fallback background color (match the edges of the image)
      }}
    >
      {/* Add the Particles background */}
      <Particles
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        moveParticlesOnHover={true}
        particleHoverFactor={1}
        alphaParticles={true}
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation={false}
        className="particles-background"
      />

      {/* Login form */}
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
