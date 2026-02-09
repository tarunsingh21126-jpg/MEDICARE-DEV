export default function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`d-flex mb-2 ${isUser ? "justify-content-end" : ""}`}>
      <div
        className={`px-3 py-2 rounded-4 shadow-sm chat-bubble ${
          isUser ? "user-bubble" : "bot-bubble"
        }`}
        style={{ maxWidth: "75%" }}
      >
        <div className="small">{message.text}</div>
        <div className="text-muted small mt-1" style={{ fontSize: "11px" }}>
          {message.time}
        </div>
      </div>
    </div>
  );
}