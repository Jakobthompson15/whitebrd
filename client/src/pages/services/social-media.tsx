import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Share2, Users, TrendingUp, MessageCircle, Image, Calendar, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Planned, consistent posting across all your platforms"
  },
  {
    icon: Image,
    title: "Custom Graphics",
    description: "Eye-catching visuals designed for each platform"
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "We respond to comments and messages on your behalf"
  },
  {
    icon: TrendingUp,
    title: "Paid Social Advertising",
    description: "Targeted ads that drive real business results"
  }
];

const results = [
  "250% average engagement rate increase",
  "20-30 posts per month per platform",
  "Professional graphic design included",
  "Daily monitoring and engagement",
  "Monthly performance reporting"
];

const services = [
  {
    title: "Strategy & Planning",
    description: "Custom social media strategy aligned with business goals"
  },
  {
    title: "Content Creation",
    description: "Original posts, graphics, and videos for your brand"
  },
  {
    title: "Platform Management",
    description: "Facebook, Instagram, LinkedIn, Twitter, and TikTok"
  },
  {
    title: "Community Engagement",
    description: "Build relationships with your audience daily"
  },
  {
    title: "Influencer Outreach",
    description: "Connect with influencers in your industry"
  },
  {
    title: "Social Advertising",
    description: "Paid campaigns that amplify your organic reach"
  }
];

export default function SocialMedia() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Social Media Marketing</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Build Your Brand on Social Media
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Your customers are scrolling right now. Our <span className="font-bold">social media experts</span> create
                  engaging content that <span className="text-blue-600 font-bold">builds your brand, grows your following,</span> and
                  drives real business results across all platforms.
                </p>

                <div className="space-y-3 mb-8">
                  {results.slice(0, 3).map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/free-audit">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Social Media Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      See Content Samples
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Social Media Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Engagement Rate Increase</span>
                      <span className="text-2xl font-bold text-blue-600">+250%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Posts</span>
                      <span className="text-2xl font-bold text-green-600">20-30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Follower Growth</span>
                      <span className="text-2xl font-bold text-purple-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Time</span>
                      <span className="text-2xl font-bold text-orange-600">&lt;2hrs</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Full-Service Social Media Management</h2>
              <p className="text-xl text-gray-600">
                We handle everything so you can focus on your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-gray-600">
                Complete social media management from strategy to execution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Social Media Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free social media audit and custom strategy. We'll show you exactly how to grow your following and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Social Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Talk to Social Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
