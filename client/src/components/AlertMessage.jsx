// src/components/AlertMessage.jsx
import { useEffect } from "react";

export default function AlertMessage({ message, clearMessage }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => clearMessage(), 2000); // auto clear in 2s
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return (
    <div
      className="alert alert-info text-center shadow-sm position-fixed top-0 start-50 translate-middle-x mt-3"
      style={{ zIndex: 9999, width: "400px" }}
    >
      {message}
    </div>
  );
}
