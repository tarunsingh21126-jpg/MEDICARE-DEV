export async function loginUser(email, password) {
  // dummy delay
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  // dummy user
  return {
    user: {
      name: "Tarun",
      email,
    },
    token: "dummy_token_123",
  };
}

export async function registerUser(name, email, password) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!name || name.length < 3) {
    throw new Error("Name must be at least 3 characters");
  }

  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  return {
    user: {
      name,
      email,
    },
    token: "dummy_token_456",
  };
}