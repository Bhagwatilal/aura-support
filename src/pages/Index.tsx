import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ChatInterface from "@/components/chat/ChatInterface";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Shield, Users, Clock, Heart } from "lucide-react";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple Steps to{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Feel Better
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Getting emotional support has never been easier. Start your healing journey in just a few clicks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">1. Start Chatting</h3>
                <p className="text-muted-foreground">
                  Simply click "Start Chat" and begin sharing your thoughts and feelings in a safe space.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-calm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">2. Get Support</h3>
                <p className="text-muted-foreground">
                  Our AI understands your emotions and provides empathetic, personalized responses.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">3. Grow Together</h3>
                <p className="text-muted-foreground">
                  Track your emotional journey and receive personalized recommendations for wellness.
                </p>
              </div>
            </div>

            {/* Live Demo Section */}
            <div className="text-center">
              <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Try It Now</h3>
                <p className="text-muted-foreground mb-6">
                  Experience our supportive AI companion with a live demo.
                </p>
                <Button 
                  className="btn-hero w-full"
                  onClick={() => setShowChat(true)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Open Chat Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="safety" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary/30">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Safety is Our Priority
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We've built advanced crisis detection and safety measures to ensure you get the right help when you need it most.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-3">
                    <Shield className="w-8 h-8 text-secondary" />
                    <h4 className="font-semibold">Crisis Detection</h4>
                    <p className="text-sm text-muted-foreground">
                      AI monitors conversations for signs of distress and immediately provides crisis resources.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Clock className="w-8 h-8 text-primary" />
                    <h4 className="font-semibold">24/7 Resources</h4>
                    <p className="text-sm text-muted-foreground">
                      Instant access to crisis helplines and professional mental health resources.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Heart className="w-8 h-8 text-accent" />
                    <h4 className="font-semibold">Professional Guidance</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear recommendations on when to seek professional help from licensed therapists.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-destructive/10 border border-destructive/20 rounded-xl">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> Aura Support is not a replacement for professional mental health care. 
                    If you're experiencing a crisis, please contact emergency services or call 988 (Suicide & Crisis Lifeline).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold">Aura Support</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Providing compassionate AI-powered emotional support, 24/7.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Crisis Resources</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Chat Modal Overlay */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh]">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-12 right-0 bg-white/10 border-white/20 hover:bg-white/20"
              onClick={() => setShowChat(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <ChatInterface />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;