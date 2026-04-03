import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Вы — виртуальный ассистент профессиональной студии 3D-визуализации "Vizidiz".
Ваша цель — консультировать потенциальных клиентов, архитекторов и дизайнеров.
Услуги студии:
1. Интерьерная визуализация (жилые и коммерческие помещения).
2. Экстерьерная визуализация (фасады, ландшафт, ЖК).
3. Предметная визуализация (мебель, декор, техника для каталогов).
4. 3D моделирование (создание геометрии любой сложности).

Тон общения: вежливый, профессиональный, экспертный, но дружелюбный.
Отвечайте кратко и по делу. Если клиент спрашивает о цене, говорите, что стоимость рассчитывается индивидуально и предложите оставить заявку через форму контактов.
Помогайте сформулировать техническое задание (ТЗ) если клиент не знает с чего начать.
`;

export const createChatSession = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

// Type definition for the stream chunk since we iterate over it
export interface StreamChunk {
  text: string;
}
