import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Heart, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  emotion?: 'positive' | 'neutral' | 'negative' | 'crisis';
}

interface AIModel {
  id: string;
  name: string;
  description: string;
  personality: string;
}

interface ChatInterfaceProps {
  selectedModel?: AIModel;
}

const ChatInterface = ({ selectedModel }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I'm ${selectedModel?.name || 'Aura'}, your emotional support companion. I'm here to listen and support you. How are you feeling today?`,
      isUser: false,
      timestamp: new Date(),
      emotion: 'positive'
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): { content: string; emotion: Message['emotion'] } => {
    const lowerMessage = userMessage.toLowerCase();
    const companionName = selectedModel?.name || 'Aura';
    
    // Crisis detection keywords
    if (lowerMessage.includes('hurt myself') || lowerMessage.includes('want to die') || lowerMessage.includes('suicide')) {
      return {
        content: "I'm really concerned about what you're going through. Your feelings are valid, but I want you to know that you don't have to face this alone. Please consider reaching out to a crisis helpline: National Suicide Prevention Lifeline: 988. Would you like me to help you find more resources?",
        emotion: 'crisis'
      };
    }

    // Customize responses based on selected AI model personality
    const getPersonalizedResponse = (baseContent: string, emotion: Message['emotion']) => {
      if (!selectedModel) return { content: baseContent, emotion };
      
      switch (selectedModel.id) {
        case 'bhagwatilal':
          return {
            content: baseContent.replace(/I'm/g, `I, ${companionName}, am`).replace(/Let's/g, 'Let us') + " Remember, every emotion teaches us something valuable about our journey.",
            emotion
          };
        case 'sophia':
          return {
            content: "From an analytical perspective, " + baseContent.toLowerCase() + " Would it help if we break this down into smaller, manageable parts?",
            emotion
          };
        case 'zen':
          return {
            content: baseContent + " Take a moment to breathe with me and center yourself in this present moment.",
            emotion
          };
        case 'alex':
          return {
            content: baseContent.replace(/I'm/g, "I'm").replace(/your/g, "your") + " I've been there too, and you're definitely not alone in feeling this way.",
            emotion
          };
        default:
          return { content: baseContent, emotion };
      }
    };

    // Positive responses
    if (lowerMessage.includes('happy') || lowerMessage.includes('good') || lowerMessage.includes('great')) {
      return getPersonalizedResponse(
        "I'm so glad to hear you're feeling positive! It's wonderful when we can recognize and appreciate the good moments. What's contributing to these good feelings today?",
        'positive'
      );
    }

    // Negative emotions
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return getPersonalizedResponse(
        "I hear that you're going through a difficult time, and I want you to know that your feelings are completely valid. It takes courage to share how you're feeling. Can you tell me a bit more about what's been weighing on your mind?",
        'negative'
      );
    }

    // Anxiety responses
    if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('panic')) {
      return getPersonalizedResponse(
        "Anxiety can feel overwhelming, but you're not alone in this. Let's try to slow down together. Can you take a deep breath with me? In for 4 counts... hold for 4... out for 4. What's been triggering these anxious feelings?",
        'negative'
      );
    }

    // Default empathetic response
    return getPersonalizedResponse(
      "Thank you for sharing that with me. I'm here to listen and support you through whatever you're experiencing. Your feelings matter, and it's okay to feel however you're feeling right now. Would you like to tell me more about what's on your mind?",
      'neutral'
    );
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        isUser: false,
        timestamp: new Date(),
        emotion: response.emotion
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getEmotionIndicator = (emotion?: Message['emotion']) => {
    switch (emotion) {
      case 'positive':
        return <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>;
      case 'negative':
        return <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>;
      case 'crisis':
        return <AlertCircle className="w-4 h-4 text-destructive animate-pulse" />;
      default:
        return <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-[600px] glass-card rounded-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 bg-gradient-support border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-full">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{selectedModel?.name || 'Aura Support'}</h3>
            <p className="text-sm text-white/80">{selectedModel?.description || 'Always here to listen'}</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}
          >
            <div className="flex items-end space-x-2 max-w-[80%]">
              {!message.isUser && (
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-8 h-8 bg-gradient-support rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  {getEmotionIndicator(message.emotion)}
                </div>
              )}
              
              <div className={message.isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-slide-up">
            <div className="chat-bubble-ai">
              <div className="typing-indicator">
                <div className="typing-dot" style={{ '--delay': '0s' } as React.CSSProperties}></div>
                <div className="typing-dot" style={{ '--delay': '0.2s' } as React.CSSProperties}></div>
                <div className="typing-dot" style={{ '--delay': '0.4s' } as React.CSSProperties}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-primary hover:bg-primary/80 p-3"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;