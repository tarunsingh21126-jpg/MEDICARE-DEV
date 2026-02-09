import ChatBot from "../components/chatbot/ChatBot";

export default function Chat() {
  return (
    <div className="container py-5">
      <h2 className="mb-3 fw-bold">Chat Page</h2>

      <div style={{ maxWidth: "520px" }}>
        <ChatBot />
      </div>
    </div>
  );
}