import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, MessageCircle, Bug, HelpCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const supportCategories = [
    { value: "technical", label: "Technical Issue", icon: Bug },
    { value: "account", label: "Account & Billing", icon: Mail },
    { value: "safety", label: "Safety & Privacy", icon: Shield },
    { value: "feedback", label: "Feedback & Suggestions", icon: MessageCircle },
    { value: "general", label: "General Questions", icon: HelpCircle }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", category: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <h1 className="text-3xl md:text-4xl font-bold">Contact Support</h1>
            <p className="text-muted-foreground mt-2">We're here to help you with any questions or issues</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Quick Help Section */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">How Can We Help?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from the options below or send us a detailed message. We typically respond within 24 hours.
              </p>
            </div>

            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {supportCategories.map((category) => (
                <div
                  key={category.value}
                  className={`p-4 rounded-xl border cursor-pointer transition-all hover:bg-background/50 ${
                    formData.category === category.value 
                      ? 'border-primary bg-primary/10' 
                      : 'border-white/20 bg-background/30'
                  }`}
                  onClick={() => handleInputChange('category', category.value)}
                >
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{category.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Brief description of your inquiry"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Please provide details about your question or issue..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Other Ways to Reach Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Email Support</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">General Questions:</p>
                  <a href="mailto:support@aurasupport.com" className="text-primary hover:underline">
                    support@aurasupport.com
                  </a>
                  <p className="text-muted-foreground">Privacy & Safety:</p>
                  <a href="mailto:privacy@aurasupport.com" className="text-primary hover:underline">
                    privacy@aurasupport.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Response Times</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• General Inquiries: Within 24 hours</p>
                  <p>• Technical Issues: Within 12 hours</p>
                  <p>• Safety Concerns: Within 2 hours</p>
                  <p>• Emergency Issues: Immediate response</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Is my conversation data private?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, all conversations are encrypted and stored securely. We never share your personal information with third parties.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">What should I do in a mental health emergency?</h4>
                <p className="text-sm text-muted-foreground">
                  If you're in crisis, please contact emergency services (911) or the 988 Suicide & Crisis Lifeline immediately. 
                  Aura Support is not a replacement for professional emergency care.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Can I delete my conversation history?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can request deletion of your data by contacting us at privacy@aurasupport.com. 
                  We will permanently remove your information within 30 days.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">How accurate is the AI's emotional support?</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI is trained on therapeutic techniques and emotional support best practices, but it's not a replacement 
                  for professional therapy. For ongoing mental health needs, we recommend consulting with licensed professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;