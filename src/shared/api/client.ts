export const apiClient = async (url: string, options?: RequestInit) => {
  const res = await fetch(`http://localhost:3000${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error("Api Error");
  }

  return res.json;
};
