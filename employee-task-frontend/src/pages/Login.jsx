import { useState } from "react";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data);
      localStorage.setItem("email", email);
      console.log("Token:", localStorage.getItem("token"));
      console.log("Email:", localStorage.getItem("email"));
      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">
            Welcome Back 👋
          </h2>

          <p className="text-secondary">
            Login to your Task Management System
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;