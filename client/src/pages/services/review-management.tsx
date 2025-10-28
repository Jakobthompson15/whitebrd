import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, MessageSquare, Shield, TrendingUp, AlertCircle, Users, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Star,
    title: "Review Generation",
    description: "Automated campaigns that increase 5-star reviews by 400%"
  },
  {
    icon: MessageSquare,
    title: "Response Management",
    description: "Professional responses to every review, positive or negative"
  },
  {
    icon: Shield,
    title: "Reputation Monitoring",
    description: "Real-time alerts when new reviews are posted"
  },
  {
    icon: TrendingUp,
    title: "Rating Improvement",
    description: "Proven strategies to boost your overall star rating"
  }
];

const results = [
  "400% increase in positive reviews",
  "Responses within 24 hours guaranteed",
  "Monitor 50+ review platforms",
  "Automated review request campaigns",
  "Negative review mitigation included"
];

const process = [
  {
    number: "01",
    title: "Audit & Setup",
    description: "Analyze current reviews and claim all business profiles"
  },
  {
    number: "02",
    title: "Campaign Launch",
    description: "Deploy automated review request systems"
  },
  {
    number: "03",
    title: "Monitor & Respond",
    description: "Track new reviews and respond professionally"
  },
  {
    number: "04",
    title: "Analyze & Optimize",
    description: "Report on performance and adjust strategy"
  }
];

export default function ReviewManagement() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Review & Reputation Management</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Build Trust with 5-Star Reviews
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  93% of consumers read reviews before buying. Our <span className="font-bold">reputation management system</span> helps
                  you <span className="text-blue-600 font-bold">generate more 5-star reviews, respond to every customer,</span> and
                  build an online reputation that drives sales.
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
                      Get Reputation Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      See How It Works
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
                    <CardTitle className="text-2xl">Average Client Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Review Volume Increase</span>
                      <span className="text-2xl font-bold text-blue-600">+400%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Star Rating</span>
                      <span className="text-2xl font-bold text-green-600">4.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Time</span>
                      <span className="text-2xl font-bold text-purple-600">&lt;24hrs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Platforms Monitored</span>
                      <span className="text-2xl font-bold text-orange-600">50+</span>
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
              <h2 className="text-4xl font-bold mb-4">Complete Reputation Management</h2>
              <p className="text-xl text-gray-600">
                Everything you need to build and protect your online reputation
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

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How We Build Your Reputation</h2>
              <p className="text-xl text-gray-600">
                A proven system for generating and managing reviews
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-blue-600 mb-4 opacity-20">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
              Start Building Your 5-Star Reputation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free reputation audit and see exactly how we'll increase your reviews and improve your ratings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Reputation Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Talk to Review Expert
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
