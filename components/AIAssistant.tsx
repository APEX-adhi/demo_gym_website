import React, { useState, useRef, useEffect } from 'react';
import { getFitnessAdvice } from '../services/geminiService';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getFitnessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-rose-600 p-4 flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white">Forge AI Advisor</h4>
              <p className="text-[10px] text-white/80 uppercase font-medium">Available 24/7 for advice</p>
            </div>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0A0A0A]">
            {messages.length === 0 && (
              <div className="text-gray-500 text-sm text-center py-10 italic">
                Ask me anything about our training programs or your fitness goals.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm ${m.role === 'user'
                    ? 'bg-rose-600 text-white'
                    : 'bg-zinc-800 text-gray-200 border border-white/5'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 text-sm animate-pulse text-gray-400 italic">
                  Calculating...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-zinc-900 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your fitness question..."
              className="flex-1 bg-[#0A0A0A] border border-white/10 px-3 py-2 text-sm text-white focus:border-rose-600 outline-none placeholder-zinc-600"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-rose-600 px-4 py-2 text-white font-bold text-xs uppercase hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
