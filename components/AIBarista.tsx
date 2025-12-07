import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Command, Terminal, Minimize2, Maximize2, MoreHorizontal } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToBarista } from '../services/geminiService';

const AIBarista: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: "System initialized. I am Byte, your AI brewing assistant. What can I craft for you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToBarista(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-barista" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center px-3 py-1 bg-tech-500/10 border border-tech-500/30 rounded-full mb-6">
            <Sparkles className="w-3 h-3 text-tech-400 mr-2" />
            <span className="text-tech-400 font-mono text-xs uppercase tracking-widest">Powered by Gemini 2.5</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Interface with </span>
             <span className="text-tech-500">Byte</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Our AI doesn't just process data; it processes flavor profiles. 
            Speak naturally—Byte understands context, slang, and caffeine cravings.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="relative group">
          {/* Glow effect behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-tech-500 via-purple-500 to-coffee-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl h-[700px] flex flex-col border border-white/10 bg-[#050b14]/90 backdrop-blur-2xl">
            
            {/* Terminal Header */}
            <div className="bg-black/40 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-px bg-white/10 mx-2"></div>
                <div className="flex items-center text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/5">
                  <Terminal className="w-3 h-3 mr-2 text-tech-500" />
                  byte_barista_v2.5.exe
                </div>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-gray-500">
                <div className="flex items-center px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  SYSTEM READY
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                    
                    {/* Avatar */}
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg
                      ${msg.role === 'user' 
                        ? 'bg-coffee-600 text-white' 
                        : 'bg-tech-900/50 text-tech-400 border border-tech-500/30'
                      }
                    `}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`
                        relative p-5 rounded-2xl backdrop-blur-md shadow-sm border
                        ${msg.role === 'user'
                          ? 'bg-coffee-600/10 border-coffee-500/30 text-white rounded-tr-none'
                          : 'bg-white/5 border-white/10 text-gray-200 rounded-tl-none'
                        }
                      `}
                    >
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans">
                        {msg.text}
                      </p>
                      <span className="text-[10px] opacity-40 mt-3 block font-mono uppercase tracking-wider">
                        T-{msg.timestamp.getHours().toString().padStart(2, '0')}{msg.timestamp.getMinutes().toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-3 pl-14">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-tech-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-tech-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-tech-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-xs text-tech-500/70 font-mono animate-pulse">COMPUTING RESPONSE...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-black/20 border-t border-white/5">
              <div className="relative flex items-center group/input">
                <div className="absolute left-4 text-gray-500">
                  <Command className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter command or coffee query..."
                  className="w-full bg-black/40 border border-white/10 text-white rounded-xl py-4 pl-12 pr-14 focus:outline-none focus:border-tech-500/50 focus:ring-1 focus:ring-tech-500/50 transition-all font-mono text-sm placeholder-gray-600 shadow-inner"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-tech-600/20 hover:bg-tech-500 text-tech-400 hover:text-white rounded-lg transition-all border border-tech-500/30 hover:border-tech-400"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-gray-600 font-mono uppercase">
                <span>Latency: ~45ms</span>
                <span>Encryption: AES-256</span>
              </div>
            </div>
            
            {/* Decorative Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-tech-500/5 to-transparent h-4 w-full animate-scanline opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBarista;