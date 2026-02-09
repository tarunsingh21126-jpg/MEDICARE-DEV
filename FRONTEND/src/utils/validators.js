export function validateEmail(email) {
  if (!email) return "Email is required";
  if (!email.includes("@")) return "Enter a valid email";
  return "";
}

export function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
}

export function validateName(name) {
  if (!name) return "Name is required";
  if (name.length < 3) return "Name must be at least 3 characters";
  return "";
}

export function validateMessage(message) {
  if (!message) return "Message is required";
  if (message.length < 10) return "Message must be at least 10 characters";
  return "";
}