import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2">How we protect your personal information</p>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* Introduction */}
            <section className="text-center space-y-4 pb-8 border-b border-white/10">
              <div className="w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Aura Support, we're committed to protecting your privacy and maintaining the confidentiality 
                of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            {/* Information Collection */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Information We Collect</h3>
              </div>
              <div className="space-y-4 pl-9">
                <div>
                  <h4 className="font-medium mb-2">Chat Conversations</h4>
                  <p className="text-muted-foreground text-sm">
                    We store your conversations with our AI to provide personalized support and improve our services. 
                    All conversations are encrypted and stored securely.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Usage Information</h4>
                  <p className="text-muted-foreground text-sm">
                    We collect basic usage statistics to improve our service, including session length, 
                    feature usage, and technical performance data.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Account Information</h4>
                  <p className="text-muted-foreground text-sm">
                    If you create an account, we collect your email address and any profile information you choose to share.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-semibold">How We Protect Your Data</h3>
              </div>
              <div className="space-y-4 pl-9">
                <div>
                  <h4 className="font-medium mb-2">End-to-End Encryption</h4>
                  <p className="text-muted-foreground text-sm">
                    All conversations are encrypted in transit and at rest using industry-standard encryption protocols.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Anonymous Processing</h4>
                  <p className="text-muted-foreground text-sm">
                    Personal identifiers are removed from conversations used for AI training and service improvement.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Limited Access</h4>
                  <p className="text-muted-foreground text-sm">
                    Only authorized personnel have access to user data, and all access is logged and monitored.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">How We Use Your Information</h3>
              </div>
              <div className="space-y-2 pl-9">
                <p className="text-muted-foreground text-sm">• Provide personalized emotional support and responses</p>
                <p className="text-muted-foreground text-sm">• Improve our AI models and service quality</p>
                <p className="text-muted-foreground text-sm">• Detect and respond to crisis situations</p>
                <p className="text-muted-foreground text-sm">• Send important service updates and safety notifications</p>
                <p className="text-muted-foreground text-sm">• Comply with legal obligations and safety requirements</p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Data Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, rent, or share your personal information with third parties, except in the following circumstances:
              </p>
              <div className="space-y-2 pl-4">
                <p className="text-muted-foreground text-sm">• When required by law or legal process</p>
                <p className="text-muted-foreground text-sm">• In emergency situations to prevent harm</p>
                <p className="text-muted-foreground text-sm">• With your explicit consent</p>
                <p className="text-muted-foreground text-sm">• With service providers who help us operate our platform (under strict confidentiality agreements)</p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Your Rights</h3>
              <div className="space-y-2 pl-4">
                <p className="text-muted-foreground text-sm">• Access your personal information</p>
                <p className="text-muted-foreground text-sm">• Request deletion of your data</p>
                <p className="text-muted-foreground text-sm">• Opt out of data processing for service improvement</p>
                <p className="text-muted-foreground text-sm">• Request data portability</p>
                <p className="text-muted-foreground text-sm">• Update or correct your information</p>
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-4 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or want to exercise your data rights, 
                please contact us at privacy@aurasupport.com
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

export default PrivacyPolicy;