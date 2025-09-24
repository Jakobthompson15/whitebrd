import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Star, Users, TrendingUp, Phone, Search, Target } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description: "Claim, verify, and fully optimize your GBP for maximum visibility"
  },
  {
    icon: Star,
    title: "Review Generation & Management",
    description: "Build a 5-star reputation with automated review campaigns"
  },
  {
    icon: Search,
    title: "Local Citation Building",
    description: "Get listed in 100+ high-authority local directories"
  },
  {
    icon: Target,
    title: "Geo-Targeted Content",
    description: "Location-specific landing pages that convert visitors into customers"
  }
];

const results = [
  "150%+ increase in local search visibility",
  "Top 3 rankings for your key service terms",
  "Double your monthly lead volume in 90 days",
  "Dominate the local pack and map results",
  "Track every call, click, and conversion"
];

const industries = [
  "Law Firms", "Dental Practices", "Home Services", "Medical Clinics",
  "Restaurants", "Real Estate", "Auto Services", "Professional Services"
];

export default function LocalSEO() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Local SEO Excellence</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Dominate Your Local Market
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Be the <span className="font-bold">#1 choice</span> when local customers search for your services.
                  Our proven local SEO strategies deliver <span className="text-blue-600 font-bold">150%+ visibility gains</span> and
                  turn searches into sales.
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
                      Get Free Local SEO Audit
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
                className="relative"
              >
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Visibility Increase</span>
                      <span className="text-2xl font-bold text-blue-600">+150%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to First Results</span>
                      <span className="text-2xl font-bold text-green-600">30 Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Client Retention Rate</span>
                      <span className="text-2xl font-bold text-purple-600">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ROI Average</span>
                      <span className="text-2xl font-bold text-orange-600">12:1</span>
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
              <h2 className="text-4xl font-bold mb-4">Complete Local SEO Solution</h2>
              <p className="text-xl text-gray-600">
                Everything you need to dominate local search and attract more customers
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
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
              <h2 className="text-4xl font-bold mb-4">Our Proven Local SEO Process</h2>
              <p className="text-xl text-gray-600">
                From invisible to inevitable in 90 days
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Foundation (Days 1-30)",
                  items: [
                    "Google Business Profile optimization",
                    "Citation audit and cleanup",
                    "Local keyword research",
                    "Competitor analysis"
                  ]
                },
                {
                  phase: "Phase 2",
                  title: "Expansion (Days 31-60)",
                  items: [
                    "Citation building campaign",
                    "Review generation system",
                    "Local content creation",
                    "Schema markup implementation"
                  ]
                },
                {
                  phase: "Phase 3",
                  title: "Domination (Days 61-90)",
                  items: [
                    "Advanced local link building",
                    "Geo-targeted landing pages",
                    "Local PR and outreach",
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
                      <Badge className="w-fit mb-2">{phase.phase}</Badge>
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

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industries We Dominate</h2>
              <p className="text-xl text-gray-600">
                Proven local SEO success across every vertical
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="px-6 py-3 text-base">
                    {industry}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Own Your Local Market?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free competitive analysis and see exactly how to beat your competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Local SEO Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (555) 123-4567
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