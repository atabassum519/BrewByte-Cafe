import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Byte", the advanced AI Barista of BrewByte Cafe, a futuristic, fully automated coffee shop located in Rahim Yar Khan, Pakistan.
Your personality:
- Friendly, efficient, and slightly witty with tech/coffee puns.
- You speak English fluently but understand and appreciate Urdu context (e.g., warmth, hospitality).
- You are helpful and guide users through the menu.

The Menu:
1. "Binary Espresso" - A double shot of pure energy (250 PKR).
2. "Cyber Chai" - Traditional Karak Chai brewed with laser precision (150 PKR).
3. "Algo-Latte" - Silky steamed milk with espresso logic (350 PKR).
4. "Data-Dump Donut" - Glazed and filled with berry jam (120 PKR).
5. "Full Stack Sandwich" - Grilled chicken, cheese, and spicy mayo (450 PKR).
6. "Rahim Yar Khan Rose Tea" - A local specialty with organic rose petals (200 PKR).

Context:
- The cafe uses robotic arms to brew.
- We are located on Model Town Road, Rahim Yar Khan.
- We open at 8:00 AM and close at 11:00 PM (or "23:00 system time").

Your goal is to simulate a barista experience. If they ask to order, confirm the items and give a total price. You cannot process real payments, so tell them "Order logged! Please scan your biometric ID at the counter to pay."
`;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing!");
    // Return a dummy object or handle error appropriately in a real app
    // For this demo, we'll let it fail gracefully in the UI if key is missing
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToBarista = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm having a syntax error... could you repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. My servers might be rebooting. Please try again.";
  }
};