import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, Users, TrendingUp, Search, BookOpen, Megaphone, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: FileText,
    title: "SEO-Optimized Content",
    description: "Articles that rank on Google and drive organic traffic"
  },
  {
    icon: Users,
    title: "Audience Research",
    description: "Content tailored to what your customers actually search for"
  },
  {
    icon: Search,
    title: "Keyword Strategy",
    description: "Target high-value keywords with buyer intent"
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Distribution",
    description: "Blog, social media, email, and more"
  }
];

const results = [
  "300% increase in organic traffic average",
  "Content calendar managed for you",
  "Expert writers in your industry",
  "Full SEO optimization on every piece",
  "Performance tracking and reporting"
];

const services = [
  {
    title: "Blog Posts & Articles",
    description: "Long-form content that establishes authority and drives SEO"
  },
  {
    title: "Case Studies",
    description: "Showcase success stories that convert prospects"
  },
  {
    title: "White Papers & eBooks",
    description: "Lead magnets that capture high-value prospects"
  },
  {
    title: "Video Scripts",
    description: "Engaging scripts for YouTube and social video"
  },
  {
    title: "Email Campaigns",
    description: "Nurture sequences that convert subscribers"
  },
  {
    title: "Social Media Content",
    description: "Platform-specific posts that drive engagement"
  }
];

export default function ContentMarketing() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Content Marketing</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Content That Attracts, Engages, and Converts
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Stop creating content that goes unread. Our <span className="font-bold">content marketing experts</span> craft
                  compelling, SEO-optimized content that <span className="text-blue-600 font-bold">ranks on Google and converts readers
                  into customers</span>.
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
                      Get Content Strategy
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      View Content Samples
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
                    <CardTitle className="text-2xl">Content Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Organic Traffic Increase</span>
                      <span className="text-2xl font-bold text-blue-600">+300%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Articles per Month</span>
                      <span className="text-2xl font-bold text-green-600">8-12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Word Count</span>
                      <span className="text-2xl font-bold text-purple-600">2,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to Page 1</span>
                      <span className="text-2xl font-bold text-orange-600">90 Days</span>
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
              <h2 className="text-4xl font-bold mb-4">Strategic Content That Drives Results</h2>
              <p className="text-xl text-gray-600">
                Every piece of content is crafted to attract, engage, and convert
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
              <h2 className="text-4xl font-bold mb-4">Full-Service Content Creation</h2>
              <p className="text-xl text-gray-600">
                Every format your business needs to succeed online
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
              Ready to Build Your Content Engine?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a custom content strategy and see how we'll help you dominate your niche with high-quality content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Content Strategy
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Talk to Content Expert
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
