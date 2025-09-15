import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

export default function Dashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState("Resume Helper");
  const [chats, setChats] = useState({
    "Resume Helper": [],
    "Job Matcher": [],
    "Interview Practice": [],
    "Career Guidance": [],
  });
  const [activeChat, setActiveChat] = useState(null);
  const [user, setUser] = useState(null); // ✅ Add user state
  const [logoutMessage, setLogoutMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      navigate("/login");
    } else if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleNewChat = () => {
    const newChat = { id: Date.now(), title: "Untitled Chat", messages: [] };
    setActiveChat(newChat);
  };

  const addMessage = (msg) => {
    if (!activeChat) return;
    const updatedChat = {
      ...activeChat,
      title:
        activeChat.title === "Untitled Chat" && msg.trim() !== ""
          ? msg.slice(0, 20) + "..."
          : activeChat.title,
      messages: [...activeChat.messages, msg],
    };
    setActiveChat(updatedChat);
    setChats((prev) => ({
      ...prev,
      [selectedFeature]: prev[selectedFeature]
        .filter((c) => c.id !== activeChat.id)
        .concat(updatedChat),
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ clear user also
    setLogoutMessage("✅ You have been logged out successfully.");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        handleNewChat={handleNewChat}
        handleLogout={handleLogout}
        user={user} // ✅ Pass user down
      />
      <ChatArea activeChat={activeChat} addMessage={addMessage} />

      {logoutMessage && (
        <div
          className="alert alert-info text-center position-fixed top-0 start-50 translate-middle-x mt-3 shadow"
          style={{ zIndex: 9999, width: "400px" }}
        >
          {logoutMessage}
        </div>
      )}
    </div>
  );
}
