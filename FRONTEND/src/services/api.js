const BASE_URL = import.meta.env.VITE_API_URL || "";

export async function apiRequest(endpoint, options = {}) {
  const url = BASE_URL + endpoint;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const res = await fetch(url, config);

  let data = null;
  try {
    data = await res.json();
  } catch (err) {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
}