import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import useChat from "../../hooks/useChat";

export default function ChatBot() {
  const { messages, typing, sendMessage } = useChat();

  return (
    <div className="card shadow-sm rounded-4 overflow-hidden">
      <div className="p-3 border-bottom bg-white">
        <h5 className="m-0 fw-bold">Chatbot</h5>
        <small className="text-muted">
          {typing ? "Bot is typing..." : "Online"}
        </small>
      </div>

      <ChatWindow messages={messages} />

      <ChatInput onSend={sendMessage} disabled={typing} />
    </div>
  );
}