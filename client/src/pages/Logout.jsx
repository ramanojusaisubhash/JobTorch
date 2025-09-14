// src/pages/Logout.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Clear token
    localStorage.removeItem("token");
    setMessage("✅ You have been logged out successfully.");

    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="alert alert-info shadow-sm text-center w-50">
        {message || "Logging you out..."}
      </div>
    </div>
  );
}
