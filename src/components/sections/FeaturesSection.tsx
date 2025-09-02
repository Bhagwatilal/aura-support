import { Brain, Heart, Shield, Clock, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Understanding",
    description: "Advanced sentiment analysis that truly understands your emotions and provides personalized responses.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Heart,
    title: "Empathetic Support",
    description: "Compassionate responses designed to provide comfort and emotional validation when you need it most.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Shield,
    title: "Crisis Detection",
    description: "Built-in safety measures that recognize when you might need immediate professional help.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your emotional support companion is always here, day or night, whenever you need someone to talk to.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat naturally as if talking to a trusted friend who understands and never judges your feelings.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Track your emotional journey and receive personalized recommendations for improving your mental wellness.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Emotional Wellbeing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every feature is carefully crafted to provide the most supportive and safe experience for your mental health journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience supportive AI?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands who have found comfort and guidance through our emotional support platform.
            </p>
            <button className="btn-hero">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;