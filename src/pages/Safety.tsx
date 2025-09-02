import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageSquare, Globe, Heart, AlertTriangle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const emergencyContacts = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7 crisis support in English and Spanish",
    country: "USA"
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 text-based crisis support",
    country: "USA, Canada, UK"
  },
  {
    name: "International Association for Suicide Prevention",
    number: "Visit website for local numbers",
    description: "Global directory of crisis centers",
    country: "International",
    website: "https://www.iasp.info/resources/Crisis_Centres/"
  },
  {
    name: "Samaritans",
    number: "116 123",
    description: "Free emotional support 24/7",
    country: "UK & Ireland"
  }
];

const safetyTips = [
  {
    title: "Recognize Warning Signs",
    description: "Learn to identify when you or someone you know may need professional help",
    points: [
      "Persistent thoughts of self-harm or suicide",
      "Feeling hopeless or trapped with no way out",
      "Extreme mood changes or withdrawal from activities",
      "Increased use of alcohol or drugs as coping mechanisms"
    ]
  },
  {
    title: "Create a Safety Plan",
    description: "Having a plan can help during difficult moments",
    points: [
      "Identify personal warning signs and triggers",
      "List coping strategies that have worked before",
      "Have emergency contacts readily available",
      "Remove or secure means of self-harm from your environment"
    ]
  },
  {
    title: "Build a Support Network",
    description: "Connect with people who care about your wellbeing",
    points: [
      "Trusted friends, family members, or mentors",
      "Mental health professionals (therapists, counselors)",
      "Support groups or community organizations",
      "Online communities with proper moderation"
    ]
  }
];

const Safety = () => {
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
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/30">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Safety Resources</h1>
              <p className="text-sm text-muted-foreground">Crisis support and mental health resources</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Emergency Alert */}
        <div className="glass-card-accent p-8 rounded-2xl border-2 border-destructive/30">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-destructive mb-2">In Crisis? Get Help Now</h2>
              <p className="text-lg mb-4">
                If you're having thoughts of suicide or self-harm, please reach out for immediate help. You are not alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-destructive hover:bg-destructive/80 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 988 (USA)
                </Button>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Text HOME to 741741
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Hotlines */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Crisis Hotlines & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
                    <p className="text-primary font-mono text-lg mb-2">{contact.number}</p>
                    <p className="text-muted-foreground text-sm mb-2">{contact.description}</p>
                    <p className="text-xs text-accent">{contact.country}</p>
                    {contact.website && (
                      <a 
                        href={contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2"
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Mental Health Safety Tips</h2>
          <div className="space-y-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                    <p className="text-muted-foreground mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Help */}
        <section>
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-6">
              While AI support can be helpful for everyday emotional needs, professional mental health care 
              is essential for serious mental health conditions, trauma, or persistent symptoms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Consider Professional Help If You Experience:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Persistent sadness or depression for weeks</li>
                  <li>• Anxiety that interferes with daily activities</li>
                  <li>• Thoughts of self-harm or suicide</li>
                  <li>• Substance abuse or addiction</li>
                  <li>• Trauma or PTSD symptoms</li>
                  <li>• Eating disorders or body image issues</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-secondary">Types of Mental Health Professionals:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Therapists/Counselors:</strong> Talk therapy and coping strategies</li>
                  <li>• <strong>Psychiatrists:</strong> Medical doctors who can prescribe medication</li>
                  <li>• <strong>Psychologists:</strong> Specialized in psychological testing and therapy</li>
                  <li>• <strong>Social Workers:</strong> Community resources and support services</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> Aura Support AI companions are not a replacement for professional mental health care. 
                They are designed to provide emotional support and resources between professional sessions or when professional help is not immediately available.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Chat CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Continue Your Support Journey</h3>
            <p className="text-muted-foreground mb-6">
              Return to chat with our AI companions for ongoing emotional support and guidance.
            </p>
            <Link to="/chat">
              <Button className="btn-hero w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Continue Chatting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;