import React, { useState } from "react";

const ChatbotUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md flex flex-col justify-between h-[80vh]">
        <header className="flex items-center gap-4 mb-4">
          <div
            className="flex items-center justify-center w-12 h-12 bg-red-300 rounded-full"
            aria-label="Profile icon"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Lund</h2>
        </header>

        <div className="flex flex-col gap-4 flex-grow overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs text-white ${
                  message.sender === "user" ? "bg-blue-600" : "bg-green-600"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg transition hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
