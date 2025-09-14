import { useEffect } from "react";

export default function Toast({ message, show, onClose, type = "success" }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 2500); // auto-hide after 2.5s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  // Lighter Bootstrap background
  const bgClass = type === "success" ? "bg-success bg-opacity-50" : "bg-danger bg-opacity-50";

  return (
    <div
      className={`toast d-flex align-items-center justify-content-center ${bgClass} text-white px-4 py-2 rounded shadow
        ${show ? "opacity-100 translate-y-3" : "opacity-0 -translate-y-5"}
        transition-opacity transition-transform`}
      style={{
        position: "fixed",
        top: "10px",       // <- gap from top
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1050,
        minWidth: "220px",
        maxWidth: "350px",
      }}
    >
      <span className="me-2">{type === "success" ? "✅" : "❌"}</span>
      <span>{message}</span>
    </div>
  );
}
