import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const GPT_API_KEY = process.env.GPT_API_KEY;

const openai = new OpenAI({
  apiKey: GPT_API_KEY,
  organization: "org-FAEzrElfgpvgzviJ0u2Fm0WM",
});

export const gpt = async (text) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: text }],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
