import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, MousePointerClick, TestTube, BarChart3, Users, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: TestTube,
    title: "Data-Driven A/B Testing",
    description: "Scientific testing to identify what truly converts your visitors"
  },
  {
    icon: MousePointerClick,
    title: "User Behavior Analysis",
    description: "Heatmaps, session recordings, and analytics insights"
  },
  {
    icon: BarChart3,
    title: "Funnel Optimization",
    description: "Identify and fix drop-off points throughout your customer journey"
  },
  {
    icon: Sparkles,
    title: "Landing Page Testing",
    description: "Continuously optimize headlines, CTAs, and page elements"
  }
];

const results = [
  "Average 127% increase in conversion rates",
  "30-day roadmap to measurable improvement",
  "Detailed analytics and heat mapping",
  "Continuous testing and optimization",
  "Full transparency with monthly reports"
];

const process = [
  {
    number: "01",
    title: "Audit & Baseline",
    description: "Analyze current performance and identify opportunities"
  },
  {
    number: "02",
    title: "Hypothesis Formation",
    description: "Develop data-backed theories on what will improve conversions"
  },
  {
    number: "03",
    title: "Testing & Validation",
    description: "Run controlled experiments to prove what works"
  },
  {
    number: "04",
    title: "Scale & Iterate",
    description: "Implement winners and continue optimizing"
  }
];

export default function ConversionOptimization() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Conversion Rate Optimization</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Turn More Visitors Into Customers
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  You're getting traffic, but are they converting? Our <span className="font-bold">CRO experts</span> use
                  data and testing to <span className="text-blue-600 font-bold">double your conversion rates</span> without
                  spending more on advertising.
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
                      Get Free CRO Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      See Case Studies
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
                    <CardTitle className="text-2xl">Average Client Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Conversion Rate Increase</span>
                      <span className="text-2xl font-bold text-blue-600">+127%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue Per Visitor</span>
                      <span className="text-2xl font-bold text-green-600">+89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to Results</span>
                      <span className="text-2xl font-bold text-purple-600">30 Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tests Run Monthly</span>
                      <span className="text-2xl font-bold text-orange-600">5-8</span>
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
              <h2 className="text-4xl font-bold mb-4">Scientific Approach to More Conversions</h2>
              <p className="text-xl text-gray-600">
                No guesswork. Just data, testing, and proven results.
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
              <h2 className="text-4xl font-bold mb-4">Our CRO Process</h2>
              <p className="text-xl text-gray-600">
                Systematic testing that delivers consistent improvements
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
              Ready to Double Your Conversions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free conversion audit and discover exactly where you're losing customers. We'll show you the opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free CRO Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Talk to CRO Expert
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
