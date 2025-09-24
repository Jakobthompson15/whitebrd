import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Target, TrendingUp, Users, BarChart3, Shield, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const auditFeatures = [
  {
    icon: BarChart3,
    title: "Live Website Analysis",
    description: "Real-time review of your site's performance, SEO, and conversion potential"
  },
  {
    icon: Target,
    title: "Competitor Teardown",
    description: "See exactly how you stack up against your top 3 competitors"
  },
  {
    icon: TrendingUp,
    title: "Revenue Opportunities",
    description: "Identify untapped growth potential worth $10K-$100K+ in new revenue"
  },
  {
    icon: Zap,
    title: "90-Day Action Plan",
    description: "Get a personalized roadmap to dominate your market"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Book Your Session",
    description: "Schedule a 30-minute call at your convenience"
  },
  {
    number: "02",
    title: "Live Analysis",
    description: "We'll screen-share and review your digital presence together"
  },
  {
    number: "03",
    title: "Get Your Roadmap",
    description: "Receive a custom growth strategy with quick wins and long-term plays"
  },
  {
    number: "04",
    title: "Execute & Grow",
    description: "Implement yourself or let us handle everything for you"
  }
];

export default function FreeAudit() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    monthlyBudget: '',
    goals: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    toast({
      title: "Audit Request Received!",
      description: "We'll contact you within 2 hours to schedule your free strategy session.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">100% Free • No Obligation • Real Value</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Free 30-Minute Marketing Audit
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Discover <span className="font-bold">exactly</span> how to beat your competitors and unlock
                  <span className="text-blue-600 font-bold"> $10K-$100K+ in hidden revenue</span> with our live,
                  personalized website and marketing analysis.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Live screen-share review of your website & rankings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Competitor analysis showing how to outrank them</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Custom 90-day growth roadmap for your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Revenue opportunity scorecard with real numbers</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>500+ Businesses Audited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Same-Day Booking</span>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Schedule Your Free Audit</CardTitle>
                    <CardDescription>
                      Takes 60 seconds • Get contacted within 2 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="website">Website URL</Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://example.com"
                          value={formData.website}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => setFormData({ ...formData, industry: value })}
                        >
                          <SelectTrigger id="industry">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="legal">Legal</SelectItem>
                            <SelectItem value="healthcare">Healthcare / Medical</SelectItem>
                            <SelectItem value="home-services">Home Services / Trades</SelectItem>
                            <SelectItem value="saas">SaaS / Technology</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce / Retail</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="fitness">Fitness / Wellness</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="monthlyBudget">Monthly Marketing Budget</Label>
                        <Select
                          value={formData.monthlyBudget}
                          onValueChange={(value) => setFormData({ ...formData, monthlyBudget: value })}
                        >
                          <SelectTrigger id="monthlyBudget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2500">$0 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25000+">$25,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="goals">Primary Goals (Optional)</Label>
                        <Textarea
                          id="goals"
                          name="goals"
                          rows={3}
                          placeholder="Tell us about your marketing goals and challenges..."
                          value={formData.goals}
                          onChange={handleInputChange}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Get My Free Audit →
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        By submitting, you agree to receive marketing communications.
                        We respect your privacy and will never spam you.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What's Included in Your Free Audit</h2>
              <p className="text-xl text-gray-600">
                More value in 30 minutes than most agencies deliver in months
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">
                From booking to breakthrough in 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}