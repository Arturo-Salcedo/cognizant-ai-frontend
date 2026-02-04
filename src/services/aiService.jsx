const HF_API_URL =
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

export async function fetchAIResponse(prompt) {
  const res = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
      options: { wait_for_model: true },
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch AI response");

  const data = await res.json();

  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text.replace(prompt, "").trim();
  }
  if (data?.error) throw new Error(data.error);

  return "No response generated.";
}
