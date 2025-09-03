import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, Users, Gavel } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground mt-2">Terms and conditions for using Aura Support</p>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* Introduction */}
            <section className="text-center space-y-4 pb-8 border-b border-white/10">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Welcome to Aura Support</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                By using our service, you agree to these terms. Please read them carefully as they contain 
                important information about your rights and responsibilities.
              </p>
            </section>

            {/* Service Description */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Our Service</h3>
              </div>
              <div className="pl-9 space-y-3">
                <p className="text-muted-foreground text-sm">
                  Aura Support provides AI-powered emotional support through chat conversations. Our service is designed to offer:
                </p>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">• 24/7 emotional support and empathetic conversation</p>
                  <p className="text-muted-foreground text-sm">• Crisis detection and safety resources</p>
                  <p className="text-muted-foreground text-sm">• Coping strategies and emotional wellness guidance</p>
                  <p className="text-muted-foreground text-sm">• A safe, non-judgmental space for expression</p>
                </div>
              </div>
            </section>

            {/* Important Limitations */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-semibold">Important Limitations</h3>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <div className="space-y-3">
                  <p className="font-medium text-foreground">Aura Support is NOT a replacement for professional mental health care.</p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-sm">• We do not provide medical diagnosis or treatment</p>
                    <p className="text-muted-foreground text-sm">• Our AI is not a licensed therapist or healthcare provider</p>
                    <p className="text-muted-foreground text-sm">• In crisis situations, please contact emergency services (911) or crisis hotlines</p>
                    <p className="text-muted-foreground text-sm">• For ongoing mental health support, please consult licensed professionals</p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Your Responsibilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Appropriate Use</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Use the service for its intended purpose of emotional support</p>
                    <p>• Be respectful in your interactions</p>
                    <p>• Do not attempt to harm or exploit the service</p>
                    <p>• Follow all applicable laws and regulations</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Account Security</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Keep your account information secure</p>
                    <p>• Do not share your account with others</p>
                    <p>• Report any unauthorized access immediately</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Privacy and Data</h3>
              <p className="text-muted-foreground text-sm">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your information. By using our service, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            {/* Service Availability */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Service Availability</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• We strive to provide 24/7 service but cannot guarantee uninterrupted access</p>
                <p>• We may need to suspend service for maintenance or updates</p>
                <p>• We reserve the right to modify or discontinue features with notice</p>
              </div>
            </section>

            {/* Liability */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <Gavel className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Limitation of Liability</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Aura Support provides emotional support services "as is" without warranties of any kind. 
                  We are not liable for any damages arising from use of our service.
                </p>
                <p>
                  You understand that our AI provides general emotional support and is not a substitute 
                  for professional medical or mental health advice, diagnosis, or treatment.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Changes to Terms</h3>
              <p className="text-muted-foreground text-sm">
                We may update these terms from time to time. We will notify you of significant changes 
                and your continued use of the service constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="text-muted-foreground text-sm">
                If you have questions about these terms, please contact us at legal@aurasupport.com
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;