import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-calm rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-support rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI-Powered Emotional Support</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Safe Space
            </span>
            <br />
            for Emotional Support
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get 24/7 empathetic support from our AI companion. Safe, private, and always here when you need someone to listen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="/chat">
              <Button className="btn-hero text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your First Chat
              </Button>
            </a>
            <a href="/safety">
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                <Shield className="w-5 h-5 mr-2" />
                Learn About Safety
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-secondary" />
              <span>100% Private & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-accent" />
              <span>Always Available</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>No Judgment Zone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;