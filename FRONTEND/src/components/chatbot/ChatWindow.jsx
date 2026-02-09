import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window p-3">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
}