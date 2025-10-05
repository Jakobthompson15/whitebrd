import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Calendar,
  CheckCircle, Zap, Users, Target, ArrowRight
} from 'lucide-react';
import { Link } from 'wouter';

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule Free Audit",
    description: "30-minute growth analysis",
    action: "Book Now",
    link: "/free-audit",
    primary: true
  },
  {
    icon: Phone,
    title: "Call Direct",
    description: "Mon-Fri 9am-6pm EST",
    action: "(843) 624-3329",
    link: "tel:8436243329"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Response within 2 hours",
    action: "info@whitebrd.co",
    link: "mailto:info@whitebrd.co"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support",
    action: "Start Chat",
    link: "#chat"
  }
];

const reasons = [
  "Get a free competitive analysis",
  "Receive a custom 90-day growth plan",
  "Discover $10K-$100K in hidden revenue",
  "Learn exactly how to beat competitors"
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Received!",
          description: "We'll contact you within 2 hours during business hours.",
        });

        // Reset form
        setFormData({
          name: '', email: '', phone: '', company: '', website: '',
          service: '', budget: '', timeline: '', message: ''
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Whitebrd Co | Let's Unlock Growth Together"
        description="Schedule your free 30-minute growth analysis. Available Mon-Fri 9-6pm EST. Same-day response guaranteed. Let's transform your business."
        keywords="contact whitebrd, free marketing audit, growth analysis, digital marketing consultation, schedule strategy call"
        canonicalUrl="https://whitebrd.co/contact"
        ogTitle="Contact Whitebrd Co | Let's Unlock Growth Together"
        ogDescription="Ready to dominate your market? Schedule your free growth analysis or reach out directly. We respond within 2 hours."
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Let's Unlock Unfair Growth
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Dominate Your Market?
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              <span className="font-semibold">Schedule your free 30-minute growth analysis</span> and discover
              exactly how to beat your competition and unlock hidden revenue.
            </p>

            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={method.link}>
                    <Card className={`hover:shadow-lg transition-all cursor-pointer ${
                      method.primary ? 'border-2 border-blue-500 bg-blue-50' : ''
                    }`}>
                      <CardContent className="pt-6">
                        <method.icon className={`w-8 h-8 mx-auto mb-3 ${
                          method.primary ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <div className={`font-bold ${method.primary ? 'text-blue-600' : 'text-gray-900'}`}>
                          {method.action}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Schedule a Call?
              </h2>

              <div className="space-y-4 mb-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      1
                    </div>
                    <p className="text-gray-700">We'll contact you within 2 hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      2
                    </div>
                    <p className="text-gray-700">Schedule your free 30-min audit</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      3
                    </div>
                    <p className="text-gray-700">Get your custom growth roadmap</p>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-4">
                    <Users className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600">Businesses Helped</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <Clock className="w-6 h-6 text-green-600 mb-2" />
                    <div className="text-2xl font-bold">2 Hour</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Fill out the form or call us directly at (843) 624-3329
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
                      <Label htmlFor="website">Website</Label>
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
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local-seo">Local SEO</SelectItem>
                          <SelectItem value="national-seo">National SEO</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce Growth</SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="ppc">PPC / Google Ads</SelectItem>
                          <SelectItem value="full-service">Full Service Marketing</SelectItem>
                          <SelectItem value="consultation">Strategy Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Monthly Budget</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2500">$0 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000+">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="3-months">1-3 Months</SelectItem>
                            <SelectItem value="6-months">3-6 Months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details / Goals</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your business goals and challenges..."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* Office Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nationwide Coverage, Personal Touch</h2>
            <p className="text-xl text-gray-600">
              Serving businesses coast to coast with dedicated attention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-gray-600">Nationwide - United States</p>
                <p className="text-sm text-gray-500 mt-2">
                  Remote-first with on-site capabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
                <p className="text-sm text-gray-500 mt-2">
                  Same-day response guaranteed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Emergency Support</h3>
                <p className="text-gray-600">For urgent matters</p>
                <p className="text-sm text-gray-500 mt-2">
                  Priority support for active clients 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Growth Tips & Industry Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 5,000+ business owners getting actionable marketing strategies weekly
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
                required
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-white/70 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}