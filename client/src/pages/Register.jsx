import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import img from "../assets/image3.png";
import Toast from "../components/Toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/auth/register", formData);
      setToastMessage("Registered successfully!");
      setShowToast(true);
      setTimeout(() => navigate("/login"), 500);
    } catch (err) {
      setToastMessage(err.response?.data?.message || "Registration failed");
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

              <h2 className="mb-4 fw-bold">Create an Account</h2>

              <form onSubmit={handleRegister}>
                <div className="mb-3 text-start">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-gradient w-100">Register</button>
              </form>

              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" className="fw-bold text-decoration-none">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

