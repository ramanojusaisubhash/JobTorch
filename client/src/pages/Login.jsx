// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import img from "../assets/image3.png";
import Toast from "../components/Toast";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/api/auth/login", { email, password });

      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }


      setToastMessage("Logged in successfully!");
      setShowToast(true);
      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err) {
      setToastMessage(err.response?.data?.message || "Invalid credentials");
      setShowToast(true);
    }
  };


  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-7 d-none d-md-flex p-0">
          <img src={img} alt="AI Career Assistant" className="w-100 h-100 object-fit-cover" />
        </div>

        <div className="col-md-5 d-flex flex-column bg-light">
          <div className="d-flex justify-content-end p-3">
            <Link to="/" className="btn btn-primary btn-gradient">Home</Link>
          </div>

          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="w-75 text-center">
              <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastMessage.includes("successfully") ? "success" : "error"}
              />

              <h2 className="mb-4 fw-bold">Login to JobTorch</h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn w-100 btn-gradient">Login</button>
              </form>

              <p className="mt-3">
                Don’t have an account?{" "}
                <Link to="/register" className="fw-bold text-decoration-none">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
