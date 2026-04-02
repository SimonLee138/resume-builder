"use server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY is not configured");
}

export async function sendMessage(messages: any[]) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://your-portfolio.com",   // Change to your domain
      "X-Title": "Simon Lee Portfolio",
    },
    body: JSON.stringify({
      model: "qwen/qwen3.6-plus-preview:free",   // or "stepfun/step-3.5-flash:free"
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error?.error?.message || `HTTP Error ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message;
}