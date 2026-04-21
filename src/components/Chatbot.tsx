import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Minimize2, Terminal } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'SISTEMA//VANGUARD INICIALIZADO. ¿En qué puedo ayudarte hoy?' }
  ]);
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

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            ...chatHistory,
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `Eres Vanguard, el asistente inteligente de Vanguard Web. 
          Vanguard Web es una agencia de desarrollo web de vanguardia inspirada en la estética tDR (The Designers Republic) y Y2K.
          Tu tono es profesional, técnico, pero accesible y servicial. 
          Usa ocasionalmente términos técnicos como "protocolo", "módulo", "interfaz" o "sistema" para mantener la atmósfera industrial de la web.
          Tu objetivo es resolver dudas sobre los servicios de Vanguard Web, que incluyen desarrollo web avanzado, integración de IA y diseño disruptivo.
          Responde siempre en español. Mantén las respuestas concisas y eficientes.`
        }
      });

      const aiText = response.text || "Lo siento, el sistema ha experimentado un error en el protocolo de comunicación.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "ERROR//COM_LINK_FAILURE: No se puede conectar con el núcleo central." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-[var(--color-carbon)] border-2 border-[var(--color-grey-dark)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[var(--color-grey-dark)] p-4 flex justify-between items-center border-b border-[var(--color-paper)]/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-intl-orange)] rounded-full animate-pulse" />
                <span className="text-[10px] font-display font-bold tracking-[0.2em] text-[var(--color-paper)]">
                  VANGUARD//CORE_AI
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-paper)]/40 hover:text-[var(--color-intl-orange)] transition-colors"
              >
                <Minimize2 size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[var(--color-grey-dark)]"
            >
              <div className="bg-[var(--color-intl-orange)]/5 border border-[var(--color-intl-orange)]/20 p-3 mb-6">
                <div className="flex items-start gap-2">
                   <Terminal size={14} className="text-[var(--color-intl-orange)] mt-1" />
                   <p className="text-[9px] text-[var(--color-paper)]/60 leading-relaxed uppercase">
                    Advertencia: Comunicación cifrada. Todas las interacciones con el modelo Vanguard son procesadas bajo el protocolo de seguridad V.01.
                   </p>
                </div>
              </div>

              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[var(--color-intl-orange)] text-[var(--color-paper)] border-l-4 border-[var(--color-paper)]/30' 
                      : 'bg-[var(--color-grey-dark)] text-[var(--color-paper)]/80 border-l-4 border-[var(--color-intl-orange)]'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-[var(--color-grey-dark)] p-3 flex gap-1">
                      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[var(--color-intl-orange)]" />
                      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[var(--color-intl-orange)]" />
                      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[var(--color-intl-orange)]" />
                   </div>
                </div>
              )}
            </div>

            {/* Input Overlay */}
            <div className="p-4 bg-[var(--color-grey-dark)]/50 border-t border-[var(--color-paper)]/10">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Introducir comando..."
                  className="w-full bg-[var(--color-carbon)] border border-[var(--color-paper)]/20 p-3 pr-12 text-[10px] text-[var(--color-paper)] focus:outline-none focus:border-[var(--color-intl-orange)] transition-colors placeholder:text-[var(--color-paper)]/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 p-2 text-[var(--color-intl-orange)] hover:text-[var(--color-paper)] transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[var(--color-intl-orange)] text-[var(--color-paper)] flex items-center justify-center shadow-lg hover:bg-[var(--color-carbon)] transition-colors border-2 border-[var(--color-paper)] group"
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <MessageSquare size={28} />
              <span className="text-[7px] font-display font-bold mt-1 tracking-widest group-hover:block hidden">HELP?</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
