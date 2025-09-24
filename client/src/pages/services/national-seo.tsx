import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Globe, TrendingUp, BarChart3, Target, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Globe,
    title: "National Keyword Domination",
    description: "Rank for high-volume keywords that drive nationwide traffic"
  },
  {
    icon: BarChart3,
    title: "Technical SEO Excellence",
    description: "Site speed, crawlability, and architecture optimized for scale"
  },
  {
    icon: Target,
    title: "Content Authority Building",
    description: "Establish your brand as the industry thought leader"
  },
  {
    icon: Shield,
    title: "Enterprise Link Building",
    description: "High-authority backlinks from trusted national publications"
  }
];

const results = [
  "450%+ increase in organic traffic",
  "Page 1 rankings for competitive national terms",
  "3x your market share within 12 months",
  "Build unshakeable industry authority",
  "Scale beyond geographic limitations"
];

export default function NationalSEO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-purple-100 text-purple-700">National SEO Mastery</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Scale Nationwide. Dominate Industries.
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Break through geographic barriers and become the <span className="font-bold">national leader</span> in your industry.
                  Our enterprise SEO strategies deliver <span className="text-purple-600 font-bold">450%+ organic growth</span> for
                  ambitious brands ready to scale.
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
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Get National SEO Analysis
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Schedule Strategy Call
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">National SEO Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Traffic Growth</span>
                      <span className="text-2xl font-bold text-purple-600">+450%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Page 1 Rankings</span>
                      <span className="text-2xl font-bold text-blue-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Domain Authority Boost</span>
                      <span className="text-2xl font-bold text-green-600">+25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ROI Average</span>
                      <span className="text-2xl font-bold text-orange-600">18:1</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Enterprise-Grade SEO Solutions</h2>
              <p className="text-xl text-gray-600">
                Advanced strategies that separate industry leaders from the competition
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
                      <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
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
              <h2 className="text-4xl font-bold mb-4">The Path to National Dominance</h2>
              <p className="text-xl text-gray-600">
                Our proven 6-month roadmap to industry leadership
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  month: "Months 1-2",
                  title: "Foundation & Analysis",
                  items: [
                    "Comprehensive technical audit",
                    "National competitor analysis",
                    "Content gap identification",
                    "Keyword opportunity mapping"
                  ]
                },
                {
                  month: "Months 3-4",
                  title: "Content & Authority",
                  items: [
                    "Pillar content creation",
                    "Topic cluster development",
                    "E-A-T optimization",
                    "Strategic link acquisition"
                  ]
                },
                {
                  month: "Months 5-6",
                  title: "Scale & Dominate",
                  items: [
                    "National PR campaigns",
                    "Industry partnership building",
                    "Advanced schema implementation",
                    "Conversion optimization"
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-purple-100 text-purple-700">{phase.month}</Badge>
                      <CardTitle>{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Lead Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how we can position your brand as the national authority in your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Free National SEO Analysis
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Success Stories
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