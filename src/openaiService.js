// src/openaiService.js
import axios from "axios";

const OPENAI_API_KEY = ""; // Replace with your API key
const OPENAI_API_URL = "";

export const getChatResponse = async (messages) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo", // Specify the model you want to use
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content; // Adjust according to your needs
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    throw error; // Handle error appropriately in your app
  }
};
