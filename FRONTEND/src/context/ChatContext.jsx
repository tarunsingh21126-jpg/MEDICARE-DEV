import { createContext, useState } from "react";
import { getBotReply } from "../services/chatService";

export const ChatContext = createContext();

export default function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi 👋 Main chatbot hoon. Tum kya poochna chahte ho?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [typing, setTyping] = useState(false);

  function addMessage(sender, text) {
    const newMsg = {
      id: Date.now() + Math.random(),
      sender,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMsg]);
  }

  function sendMessage(text) {
    addMessage("user", text);
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      addMessage("bot", reply);
      setTyping(false);
    }, 700);
  }

  return (
    <ChatContext.Provider value={{ messages, typing, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}