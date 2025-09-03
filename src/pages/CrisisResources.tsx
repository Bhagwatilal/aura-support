import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageCircle, Globe, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const CrisisResources = () => {
  const crisisHotlines = [
    {
      name: "988 Suicide & Crisis Lifeline",
      phone: "988",
      description: "24/7 crisis support for anyone in emotional distress or suicidal crisis",
      website: "https://988lifeline.org"
    },
    {
      name: "Crisis Text Line", 
      phone: "Text HOME to 741741",
      description: "Free 24/7 support via text message for people in crisis",
      website: "https://crisistextline.org"
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "Treatment referral service for mental health and substance use disorders",
      website: "https://samhsa.gov"
    },
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      description: "24/7 support for domestic violence survivors",
      website: "https://thehotline.org"
    }
  ];

  const emergencySteps = [
    {
      title: "Immediate Danger",
      description: "If you or someone else is in immediate physical danger",
      action: "Call 911 immediately"
    },
    {
      title: "Suicidal Thoughts",
      description: "If you're having thoughts of suicide or self-harm",
      action: "Call 988 or go to your nearest emergency room"
    },
    {
      title: "Mental Health Crisis",
      description: "If you're experiencing a mental health emergency",
      action: "Contact a crisis hotline or seek immediate professional help"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="icon" className="glass-card">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Crisis Resources</h1>
            <p className="text-muted-foreground mt-2">Immediate help when you need it most</p>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Emergency Alert */}
          <div className="glass-card p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-destructive">Emergency? Get Help Now</h2>
                <p className="text-muted-foreground">
                  If you're in immediate danger or having thoughts of suicide, don't wait. Contact emergency services or a crisis hotline right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:911">
                    <Button className="bg-destructive hover:bg-destructive/90 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 911
                    </Button>
                  </a>
                  <a href="tel:988">
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 988 (Crisis Lifeline)
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* When to Seek Help */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">When to Seek Immediate Help</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recognizing when you need immediate professional help is crucial for your safety and wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="space-y-4 p-6 bg-background/50 rounded-xl border border-white/10">
                  <h3 className="font-semibold text-destructive">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-sm font-medium">{step.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Crisis Hotlines */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold">Crisis Hotlines & Resources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional crisis support available 24/7. These services are confidential, free, and staffed by trained counselors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {crisisHotlines.map((hotline, index) => (
                <div key={index} className="p-6 bg-background/50 rounded-xl border border-white/10 space-y-4">
                  <h3 className="text-xl font-semibold">{hotline.name}</h3>
                  <p className="text-muted-foreground text-sm">{hotline.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${hotline.phone.replace(/\D/g, '')}`}>
                      <Button className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        {hotline.phone}
                      </Button>
                    </a>
                    <a href={hotline.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex-1">
                        <Globe className="w-4 h-4 mr-2" />
                        Website
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Additional Support Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Mental Health Support</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">National Alliance on Mental Illness (NAMI)</p>
                    <p className="text-muted-foreground">1-800-950-6264 | nami.org</p>
                  </div>
                  <div>
                    <p className="font-medium">Mental Health America</p>
                    <p className="text-muted-foreground">mhanational.org</p>
                  </div>
                  <div>
                    <p className="font-medium">Anxiety and Depression Association</p>
                    <p className="text-muted-foreground">adaa.org</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Specialized Support</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">LGBTQ+ Crisis Support</p>
                    <p className="text-muted-foreground">Trevor Project: 1-866-488-7386</p>
                  </div>
                  <div>
                    <p className="font-medium">Veterans Crisis Line</p>
                    <p className="text-muted-foreground">1-800-273-8255 (Press 1)</p>
                  </div>
                  <div>
                    <p className="font-medium">Teen Crisis Support</p>
                    <p className="text-muted-foreground">Teen Line: 1-800-852-8336</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Planning */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Create a Safety Plan</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>A safety plan can help you stay safe during difficult moments. Consider including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm">• Warning signs that a crisis may be developing</p>
                  <p className="text-sm">• Coping strategies that have worked before</p>
                  <p className="text-sm">• People you can reach out to for support</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">• Professional contacts (therapist, doctor, etc.)</p>
                  <p className="text-sm">• How to make your environment safer</p>
                  <p className="text-sm">• Reasons for living and recovery goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisResources;