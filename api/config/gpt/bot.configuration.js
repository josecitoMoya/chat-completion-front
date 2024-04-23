import OpenAI from "openai";
import "dotenv/config";

const { GPT_API_KEY, GPT_ORGANIZATION } = process.env;

const openai = new OpenAI({
  apiKey: GPT_API_KEY,
  organization: GPT_ORGANIZATION,
});

export const gpt = async (text) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: text }],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message;
  } catch (error) {
    console.error(error);
  }
};
