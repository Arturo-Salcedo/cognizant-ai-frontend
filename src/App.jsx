import { useState, useEffect } from "react";
import PromptInput from "./components/PromptInput";
import ChatHistory from "./components/ChatHistory";
import { fetchAIResponse } from "./services/aiService";
import "./styles.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");

      const userMessage = { role: "user", content: prompt };
      setMessages((prev) => [...prev, userMessage]);

      const aiReply = await fetchAIResponse(prompt);
      setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);

      setPrompt("");
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="container">
      <h1>AI Prompt App</h1>

      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSubmit={handleSubmit}
        loading={loading}
      />

      {error && <p className="error">{error}</p>}

      <ChatHistory messages={messages} />

      {messages.length > 0 && (
        <button className="clear-btn" onClick={clearChat} disabled={loading}>
          Clear Chat
        </button>
      )}
    </div>
  );
}
