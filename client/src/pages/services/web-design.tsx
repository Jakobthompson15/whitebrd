import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Palette, Zap, Smartphone, TrendingUp, Code, Eye, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Eye,
    title: "Conversion-Focused Design",
    description: "Beautiful layouts engineered to turn visitors into customers"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive",
    description: "Flawless experience on every device and screen size"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized for speed with 90+ PageSpeed scores"
  },
  {
    icon: Code,
    title: "SEO-Optimized Code",
    description: "Built with clean, search-engine-friendly architecture"
  }
];

const results = [
  "3x higher conversion rates vs. industry average",
  "Under 2-second load times guaranteed",
  "Mobile-optimized for 70%+ of your traffic",
  "Accessible, ADA-compliant design standards",
  "Ongoing support and maintenance included"
];

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understand your business, goals, and target audience"
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Create stunning mockups and interactive prototypes"
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Build with modern tech, test across all devices"
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Go live and continuously improve performance"
  }
];

export default function WebDesign() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Web Design Excellence</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Websites Built to Convert
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Your website is your <span className="font-bold">24/7 salesperson</span>.
                  We design beautiful, high-performance websites that <span className="text-blue-600 font-bold">turn visitors into customers</span> and
                  deliver measurable ROI.
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
                      Get Free Website Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      View Our Portfolio
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
                    <CardTitle className="text-2xl">What You Get</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Conversion Lift</span>
                      <span className="text-2xl font-bold text-blue-600">+185%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">PageSpeed Score</span>
                      <span className="text-2xl font-bold text-green-600">90+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Launch Timeline</span>
                      <span className="text-2xl font-bold text-purple-600">4-6 Weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mobile Optimization</span>
                      <span className="text-2xl font-bold text-orange-600">100%</span>
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
              <h2 className="text-4xl font-bold mb-4">Design That Drives Results</h2>
              <p className="text-xl text-gray-600">
                Modern websites engineered for performance, conversion, and growth
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
              <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
              <p className="text-xl text-gray-600">
                From concept to launch, we handle everything
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
              Ready to Launch Your Dream Website?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free website audit and custom design proposal. No commitments, just insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule Consultation
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