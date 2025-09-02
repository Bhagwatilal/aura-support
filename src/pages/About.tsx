import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Heart, Shield, Zap, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Understanding",
    description: "Our AI companions use sophisticated natural language processing to understand context, emotion, and nuance in conversations.",
    details: [
      "Sentiment analysis to gauge emotional state",
      "Context awareness across conversation history", 
      "Personalized responses based on individual needs",
      "Continuous learning from interactions"
    ]
  },
  {
    icon: Heart,
    title: "Empathetic Response System",
    description: "Each AI companion is trained with different personality traits and therapeutic approaches to provide varied support styles.",
    details: [
      "Multiple companion personalities to choose from",
      "Trauma-informed response patterns",
      "Validation-focused communication",
      "Non-judgmental active listening"
    ]
  },
  {
    icon: Shield,
    title: "Crisis Detection & Safety",
    description: "Built-in safety mechanisms monitor conversations for signs of crisis and provide immediate resources when needed.",
    details: [
      "Real-time crisis keyword detection",
      "Immediate access to emergency resources",
      "Professional referral recommendations",
      "Safety planning assistance"
    ]
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Unlike human counselors, our AI companions are available round-the-clock to provide support whenever you need it.",
    details: [
      "Instant response times",
      "No appointment scheduling needed",
      "Global accessibility across time zones",
      "Consistent availability during personal crises"
    ]
  }
];

const companionProfiles = [
  {
    name: "Aura",
    personality: "Gentle & Nurturing",
    approach: "Focuses on emotional validation and comfort",
    bestFor: "Daily emotional support, anxiety, self-doubt"
  },
  {
    name: "Bhagwatilal", 
    personality: "Wise & Patient",
    approach: "Offers philosophical insights and life wisdom",
    bestFor: "Life transitions, meaning-making, spiritual concerns"
  },
  {
    name: "Sophia",
    personality: "Analytical & Structured", 
    approach: "Problem-solving and cognitive restructuring",
    bestFor: "Decision-making, goal setting, practical challenges"
  },
  {
    name: "Zen",
    personality: "Calm & Mindful",
    approach: "Mindfulness techniques and present-moment awareness",
    bestFor: "Stress management, meditation guidance, overwhelm"
  },
  {
    name: "Alex",
    personality: "Friendly & Relatable",
    approach: "Peer-to-peer support and normalization",
    bestFor: "Social anxiety, relationship issues, everyday stress"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="glass-card border-b p-4">
        <div className="container mx-auto flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline" size="icon" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">About Aura Support</h1>
              <p className="text-sm text-muted-foreground">How our AI emotional support works</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-12">
        {/* Mission Statement */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Democratizing{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Mental Health Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Aura Support makes emotional support accessible to everyone, everywhere, at any time. 
            Our AI companions provide a safe, judgment-free space for you to process emotions, 
            gain insights, and develop coping strategies.
          </p>
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Accessible</h3>
                <p className="text-sm text-muted-foreground">Available to anyone with internet access, breaking down barriers to mental health support</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe</h3>
                <p className="text-sm text-muted-foreground">Private conversations with built-in crisis detection and professional referral systems</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Effective</h3>
                <p className="text-sm text-muted-foreground">Evidence-based therapeutic techniques adapted for AI-human interaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">How Aura Support Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-2xl">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Companions */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Meet Your AI Companions</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each AI companion has a unique personality and therapeutic approach, allowing you to find 
            the support style that resonates best with your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companionProfiles.map((companion, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">
                      {companion.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{companion.name}</h3>
                  <p className="text-sm text-primary">{companion.personality}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Approach:</h4>
                    <p className="text-sm">{companion.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Best For:</h4>
                    <p className="text-sm text-accent">{companion.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations & Ethics */}
        <section>
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment to Ethical AI</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">What We Do</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Provide immediate emotional support and active listening</li>
                  <li>• Offer evidence-based coping strategies and techniques</li>
                  <li>• Help identify patterns in thoughts and emotions</li>
                  <li>• Connect you with professional resources when needed</li>
                  <li>• Maintain strict privacy and confidentiality</li>
                  <li>• Continuously improve through ethical AI development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-destructive">What We Don't Do</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Replace professional therapy or medical treatment</li>
                  <li>• Provide medical diagnoses or prescribe medication</li>
                  <li>• Handle acute psychiatric emergencies</li>
                  <li>• Make decisions about your life or relationships</li>
                  <li>• Store or sell your personal conversation data</li>
                  <li>• Judge or criticize your thoughts and feelings</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
              <h4 className="font-semibold mb-2">Important Reminder</h4>
              <p className="text-sm">
                While our AI companions are designed to be helpful and supportive, they are not licensed mental health professionals. 
                If you're experiencing severe mental health symptoms, thoughts of self-harm, or are in crisis, 
                please seek immediate help from a qualified professional or emergency services.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6">
              Start your journey toward better emotional wellbeing with compassionate AI support.
            </p>
            <Link to="/chat">
              <Button className="btn-hero w-full mb-3">
                Start Chatting Now
              </Button>
            </Link>
            <Link to="/safety">
              <Button variant="outline" className="w-full btn-secondary">
                View Safety Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;