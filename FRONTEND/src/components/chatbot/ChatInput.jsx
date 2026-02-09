import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="d-flex gap-2 p-2 border-top bg-white">
      <input
        className="form-control"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={disabled}
      />

      <button className="btn btn-dark" onClick={handleSend} disabled={disabled}>
        Send
      </button>
    </div>
  );
}