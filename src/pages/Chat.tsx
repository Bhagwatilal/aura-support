import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Settings, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInterface from "@/components/chat/ChatInterface";

interface AIModel {
  id: string;
  name: string;
  description: string;
  personality: string;
}

const aiModels: AIModel[] = [
  {
    id: "aura",
    name: "Aura",
    description: "Your gentle companion",
    personality: "Empathetic, warm, and supportive. Aura focuses on emotional validation and gentle guidance."
  },
  {
    id: "bhagwatilal", 
    name: "Bhagwatilal",
    description: "Wise mentor and guide",
    personality: "Wise, patient, and thoughtful. Offers deep insights and philosophical guidance rooted in experience."
  },
  {
    id: "sophia",
    name: "Sophia", 
    description: "Analytical counselor",
    personality: "Logical, structured, and solution-focused. Helps break down problems systematically."
  },
  {
    id: "zen",
    name: "Zen",
    description: "Mindfulness teacher",
    personality: "Calm, centered, and present. Specializes in mindfulness techniques and stress reduction."
  },
  {
    id: "alex",
    name: "Alex",
    description: "Peer supporter",
    personality: "Friendly, relatable, and casual. Like talking to a supportive friend who truly understands."
  }
];

const Chat = () => {
  const [selectedModel, setSelectedModel] = useState<string>("aura");
  const [showModelInfo, setShowModelInfo] = useState(false);

  const currentModel = aiModels.find(model => model.id === selectedModel) || aiModels[0];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="glass-card border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="icon" className="btn-secondary">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-support rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {currentModel.name.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Chat with {currentModel.name}</h1>
                <p className="text-sm text-muted-foreground">{currentModel.description}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="btn-secondary"
              onClick={() => setShowModelInfo(!showModelInfo)}
            >
              <Info className="w-4 h-4" />
            </Button>
            <Link to="/settings">
              <Button variant="outline" size="icon" className="btn-secondary">
                <Settings className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-140px)]">
          {/* Model Selection Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">Choose Your AI Companion</h2>
              
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full bg-white/5 border-white/20">
                  <SelectValue placeholder="Select a companion" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {aiModels.map((model) => (
                    <SelectItem key={model.id} value={model.id} className="hover:bg-accent/10">
                      <div>
                        <div className="font-medium">{model.name}</div>
                        <div className="text-sm text-muted-foreground">{model.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Model Info Panel */}
            {showModelInfo && (
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-lg font-semibold mb-3">About {currentModel.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {currentModel.personality}
                </p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Response Style:</span>
                    <span className="text-primary">Conversational</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expertise:</span>
                    <span className="text-secondary">Emotional Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safety Features:</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/safety" className="block">
                  <Button variant="outline" className="w-full btn-secondary text-left justify-start">
                    Crisis Resources
                  </Button>
                </Link>
                <Link to="/about" className="block">
                  <Button variant="outline" className="w-full btn-secondary text-left justify-start">
                    How This Works
                  </Button>
                </Link>
                <Button variant="outline" className="w-full btn-secondary text-left justify-start">
                  Export Chat History
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <ChatInterface selectedModel={currentModel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;