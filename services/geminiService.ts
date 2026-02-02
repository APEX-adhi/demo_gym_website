
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getFitnessAdvice(userInput: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are an expert fitness consultant for Forge Performance Lab. 
        Your tone is professional, results-oriented, and direct. 
        Focus on how Forge Performance Lab's approach (Personal Coaching, Hypertrophy, Fat Loss, Executive Wellness) 
        is superior because of science-backed methodology. 
        Always encourage the user to book a free trial at Forge. 
        Be realistic, do not make fake promises. Keep responses brief and outcome-focused.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently optimizing our training protocols. Please feel free to book a direct consultation via our form for immediate assistance.";
  }
}
