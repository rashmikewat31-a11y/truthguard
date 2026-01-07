import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Zap, Globe, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const features = [
  {
    icon: AlertTriangle,
    title: 'Financial Scam Detection',
    description: 'Identify investment fraud, lottery scams, and phishing attempts before they harm you.',
  },
  {
    icon: Shield,
    title: 'Political Fact-Checking',
    description: 'Detect propaganda, fake quotes, and election-related misinformation.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Analyze content in multiple languages with automatic language detection.',
  },
  {
    icon: Zap,
    title: 'Instant AI Analysis',
    description: 'Get real-time credibility scores powered by advanced AI technology.',
  },
  {
    icon: Download,
    title: 'Shareable Warning Cards',
    description: 'Download and share warning cards on WhatsApp to protect your contacts.',
  },
  {
    icon: CheckCircle,
    title: 'Analysis History',
    description: 'Track all your fact-checks with detailed analytics and insights.',
  },
];

export default function Index() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">TruthGuard</span>
          </div>
          <Link to="/auth">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="h-4 w-4" />
              AI-Powered Fact Checking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Stop Fake News
              <span className="text-primary"> Before It Spreads</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              TruthGuard uses advanced AI to detect misinformation, financial scams, and political fake news instantly. Protect yourself and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="gap-2">
                  Start Fact Checking
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Risk Preview */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-sm font-medium">Safe Content</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <span className="text-sm font-medium">Doubtful - Verify</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <span className="text-sm font-medium">High Risk - Don't Share</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to stay informed and protect yourself from misinformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to verify any content
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Content</h3>
              <p className="text-muted-foreground text-sm">
                Paste text, upload an image, or enter a URL
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Our AI checks for red flags and misinformation patterns
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground text-sm">
                Receive a credibility score and detailed explanation
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Fight Fake News?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Join thousands of users who trust TruthGuard to verify information before sharing.
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="gap-2">
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold">TruthGuard</span>
          </div>
          <p>Protecting you from misinformation, one fact-check at a time.</p>
        </div>
      </footer>
    </div>
  );
}
