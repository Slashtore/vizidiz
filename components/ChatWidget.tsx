import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { Chat, GenerateContentResponse } from "@google/genai";
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Здравствуйте! Я ИИ-ассистент студии Vizidiz. Чем могу помочь с вашим проектом?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Use a ref to store the chat session so it persists across renders
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    if (!isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createChatSession();
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      }
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create a temporary placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      const result = await chatSessionRef.current.sendMessageStream({
        message: userMessage
      });

      let fullText = '';
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        
        // Update the last message (the model's response) with the accumulated text
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center">
              <div className="bg-accent p-1.5 rounded-full mr-3">
                <Bot className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Vizidiz AI</h3>
                <p className="text-xs text-green-400">Онлайн</p>
              </div>
            </div>
            <button onClick={handleToggle} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-slate-900 rounded-br-none font-medium'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3">
                  <Loader2 className="w-5 h-5 text-accent animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800 border-t border-slate-700">
            <div className="flex items-center bg-slate-900 rounded-full border border-slate-600 px-2 py-1 focus-within:border-accent transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Спросите о визуализации..."
                className="flex-1 bg-transparent border-none text-white px-3 py-2 text-sm focus:outline-none placeholder-slate-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-accent text-slate-900 rounded-full hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={`${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-accent hover:scale-110'
        } p-4 rounded-full shadow-lg text-slate-900 transition-all duration-300 flex items-center justify-center`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;