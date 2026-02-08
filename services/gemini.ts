import { GoogleGenAI } from "@google/genai";
import { UserProfile, Scheme, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchSchemes = async (profile: UserProfile, lang: Language): Promise<Scheme[]> => {
  try {
    const languageInstruction = lang === 'hi' 
      ? "IMPORTANT: You MUST Output all text strings in the JSON (name, provider, description, benefits, etc.) in HINDI (Devanagari script). Do not output English." 
      : "Output in English.";

    const prompt = `
      You are an expert Government Scheme Consultant for India (Scheme-Setu).
      
      User Profile:
      - Age: ${profile.age}
      - Gender: ${profile.gender}
      - Annual Income: ₹${profile.income}
      - Caste/Category: ${profile.caste}
      - Location (State): ${profile.state}
      - Occupation: ${profile.occupation}
      - Person with Disability: ${profile.disability ? "Yes" : "No"}
      - Is Student: ${profile.student ? "Yes" : "No"}

      Task:
      1. Analyze this profile deeply.
      2. Use the search tool to find the most relevant and currently active government schemes (Central and State specific) for this user. 
      3. Focus on high-impact schemes (subsidies, scholarships, pensions, loans, insurance).
      4. Find at least 4-6 distinct schemes.
      
      ${languageInstruction}

      Output Format:
      Return a STRICT JSON array of objects. Do not include markdown formatting like \`\`\`json. 
      Just return the raw JSON array.
      
      Each object in the array must follow this structure:
      {
        "id": "unique_string_id",
        "name": "Scheme Name",
        "provider": "Government Body (e.g., 'Central Govt' or 'Karnataka Govt')",
        "description": "Short 2 sentence description.",
        "benefits": "Key monetary or non-monetary benefit (e.g., '₹5000/month pension' or '50% subsidy on loan').",
        "eligibility": ["Criteria 1", "Criteria 2"],
        "category": "One of: 'Education', 'Health', 'Agriculture', 'Business', 'Housing', 'Pension', 'Other'",
        "applicationLink": "Official URL if available, else a search query URL",
        "probability": 85 (integer 0-100 indicating match confidence)
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    // Clean up potential markdown code blocks if the model ignores the instruction
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const schemes: Scheme[] = JSON.parse(cleanText);
    return schemes;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};