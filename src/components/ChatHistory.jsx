import Message from "./Message";

export default function ChatHistory({ messages }) {
  return (
    <div className="chat-history">
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
}
