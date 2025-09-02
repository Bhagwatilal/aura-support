import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, User, Bell, Shield, Palette, Download, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [defaultCompanion, setDefaultCompanion] = useState("aura");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [crisisDetection, setCrisisDetection] = useState(true);
  const [responseSpeed, setResponseSpeed] = useState([75]);
  const [conversationStyle, setConversationStyle] = useState("balanced");

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="glass-card border-b p-4">
        <div className="container mx-auto flex items-center space-x-4">
          <Link to="/chat">
            <Button variant="outline" size="icon" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
              <User className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Settings</h1>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 max-w-4xl space-y-8">
        {/* AI Companion Preferences */}
        <section className="glass-card p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <Palette className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">AI Companion Preferences</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Default AI Companion</label>
              <Select value={defaultCompanion} onValueChange={setDefaultCompanion}>
                <SelectTrigger className="w-full bg-white/5 border-white/20">
                  <SelectValue placeholder="Choose your default companion" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="aura">Aura - Gentle & Nurturing</SelectItem>
                  <SelectItem value="bhagwatilal">Bhagwatilal - Wise & Patient</SelectItem>
                  <SelectItem value="sophia">Sophia - Analytical & Structured</SelectItem>
                  <SelectItem value="zen">Zen - Calm & Mindful</SelectItem>
                  <SelectItem value="alex">Alex - Friendly & Relatable</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-2">
                This companion will be selected by default when you start new conversations.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Conversation Style</label>
              <Select value={conversationStyle} onValueChange={setConversationStyle}>
                <SelectTrigger className="w-full bg-white/5 border-white/20">
                  <SelectValue placeholder="Choose conversation style" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="concise">Concise - Brief, direct responses</SelectItem>
                  <SelectItem value="balanced">Balanced - Moderate detail and depth</SelectItem>
                  <SelectItem value="detailed">Detailed - Comprehensive, thorough responses</SelectItem>
                  <SelectItem value="conversational">Conversational - Natural, flowing dialogue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                Response Speed: {responseSpeed[0]}%
              </label>
              <Slider
                value={responseSpeed}
                onValueChange={setResponseSpeed}
                max={100}
                min={25}
                step={25}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Thoughtful</span>
                <span>Balanced</span>
                <span>Quick</span>
                <span>Instant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Privacy */}
        <section className="glass-card p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-semibold">Safety & Privacy</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Crisis Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor conversations for signs of distress and provide immediate resources
                </p>
              </div>
              <Switch 
                checked={crisisDetection} 
                onCheckedChange={setCrisisDetection}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Data Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All conversations are encrypted end-to-end
                </p>
              </div>
              <div className="text-sm text-secondary font-medium">Always On</div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Anonymous Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Chat without creating an account or storing personal information
                </p>
              </div>
              <div className="text-sm text-primary font-medium">Active</div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="glass-card p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Check-in Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  Gentle reminders to check in with your mental health
                </p>
              </div>
              <Switch 
                checked={notificationsEnabled} 
                onCheckedChange={setNotificationsEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Coping Tip Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Daily mindfulness and coping strategy suggestions
                </p>
              </div>
              <Switch 
                checked={false} 
                onCheckedChange={() => {}}
                disabled
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Crisis Resource Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Updates about new mental health resources in your area
                </p>
              </div>
              <Switch 
                checked={true} 
                onCheckedChange={() => {}}
              />
            </div>
          </div>
        </section>

        {/* Data Management */}
        <section className="glass-card p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Data Management</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <h3 className="font-medium">Export Chat History</h3>
                <p className="text-sm text-muted-foreground">
                  Download your conversations for personal records
                </p>
              </div>
              <Button variant="outline" className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border border-destructive/20">
              <div>
                <h3 className="font-medium text-destructive">Clear All Data</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete all conversation history and preferences
                </p>
              </div>
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Data
              </Button>
            </div>
          </div>
        </section>

        {/* API Configuration (Future Backend Integration) */}
        <section className="glass-card p-8 rounded-2xl border-2 border-dashed border-white/20">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-muted-foreground">Backend Integration</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Connect to Supabase to enable AI model selection, user accounts, and chat history storage.
            </p>
            <Button variant="outline" className="btn-secondary">
              Connect to Supabase
            </Button>
          </div>
        </section>

        {/* Back to Chat */}
        <div className="text-center">
          <Link to="/chat">
            <Button className="btn-hero">
              Return to Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;