// src/components/Sidebar.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Utility function to generate initials
const getInitials = (name) => {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export default function Sidebar({
  collapsed,
  toggleSidebar,
  selectedFeature,
  setSelectedFeature,
  chats,
  activeChat,
  setActiveChat,
  handleNewChat,
  handleLogout,
  user, // ✅ make sure Dashboard passes {user}
}) {
  return (
    <div
      className={`bg-light border-end p-2 ${
        collapsed ? "col-1" : "col-3"
      } d-flex flex-column`}
    >
      {/* Logo and Menu */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {!collapsed && <h5 className="m-0">JobTorch</h5>}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* ✅ User Info (shows only if user is available) */}
      {!collapsed && user && (
        <div className="text-center mb-3">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="User"
              className="rounded-circle mb-2"
              style={{ width: "60px", height: "60px" }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white mx-auto mb-2"
              style={{ width: "60px", height: "60px", fontSize: "20px" }}
            >
              {getInitials(user.name || "Guest User")}
            </div>
          )}
          <div className="fw-bold">{user.name || "Guest User"}</div>
          <small className="text-muted">{user.email || "guest@email.com"}</small>
        </div>
      )}

      {/* New Chat Button */}
      <button className="btn btn-primary mb-3" onClick={handleNewChat}>
        {collapsed ? "+" : "New Chat"}
      </button>

      {/* Feature Dropdown */}
      {!collapsed && (
        <select
          className="form-select mb-3"
          value={selectedFeature}
          onChange={(e) => setSelectedFeature(e.target.value)}
        >
          <option>Resume Helper</option>
          <option>Job Matcher</option>
          <option>Interview Practice</option>
          <option>Career Guidance</option>
        </select>
      )}

      {/* History */}
      <div className="flex-grow-1 overflow-auto">
        <ul className="list-group">
          {chats[selectedFeature].map((chat) => (
            <li
              key={chat.id}
              className={`list-group-item list-group-item-action ${
                activeChat?.id === chat.id ? "active" : ""
              }`}
              onClick={() => setActiveChat(chat)}
              style={{ cursor: "pointer" }}
            >
              {collapsed ? "💬" : chat.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-3">
        <button
          className="btn btn-danger w-100"
          onClick={handleLogout}
          title="Logout"
        >
          {collapsed ? "⎋" : "Logout"}
        </button>
      </div>
    </div>
  );
}
