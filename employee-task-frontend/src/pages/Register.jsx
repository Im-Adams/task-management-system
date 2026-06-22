import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await registerUser({
        name,
        email,
        password
      });

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4"
        style={{
          width: "450px",
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">
            Create Account 🚀
          </h2>
          <p className="text-secondary">
            Register to start managing your tasks
          </p>
        </div>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
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
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button
            type="submit"
            className="btn btn-success w-100 py-2"
          >
            Register
          </button>
        </form>
  
        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account?{" "}
            <Link to="/">Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;