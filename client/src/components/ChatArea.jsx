// src/components/ChatArea.jsx
import React from "react";

export default function ChatArea({ activeChat, addMessage }) {
  return (
    <div className="flex-grow-1 d-flex flex-column p-3">
      {activeChat ? (
        <>
          <h5>{activeChat.title}</h5>
          <div className="flex-grow-1 border p-2 mb-2 overflow-auto">
            {activeChat.messages.length === 0 ? (
              <p className="text-muted">Start chatting...</p>
            ) : (
              activeChat.messages.map((msg, i) => (
                <div key={i} className="mb-2">
                  <strong>User:</strong> {msg}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  addMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              className="btn btn-success"
              onClick={() => {
                const input = document.querySelector("input.form-control");
                if (input.value.trim() !== "") {
                  addMessage(input.value);
                  input.value = "";
                }
              }}
            >
              Send
            </button>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <h4 className="text-muted">Start a new chat</h4>
        </div>
      )}
    </div>
  );
}
