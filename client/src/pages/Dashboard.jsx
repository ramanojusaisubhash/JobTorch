// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">Welcome to your Dashboard</h2>
        <p>Here you can track your applications and explore jobs.</p>
        <p className="text-gray-600">Choose a feature to get started:</p>
        <button
          className="btn btn-danger mt-3"
          onClick={() => navigate("/logout")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
