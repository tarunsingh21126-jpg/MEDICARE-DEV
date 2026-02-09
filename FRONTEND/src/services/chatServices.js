import { chatbotFAQs } from "../data/chatbotFAQs";

export function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase();

  for (let item of chatbotFAQs) {
    const match = item.keywords.some((key) => msg.includes(key));
    if (match) return item.answer;
  }

  return "Samajh gaya 😄 Par main abhi basic bot hoon. Tum apna question thoda aur clear bolo.";
}