import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Building2, Map, Globe, Users, TrendingUp, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Building2,
    title: "Location-Specific Pages",
    description: "Unique, optimized pages for each business location"
  },
  {
    icon: Map,
    title: "Google Business Profiles",
    description: "Manage and optimize profiles for all locations"
  },
  {
    icon: Globe,
    title: "Centralized Reporting",
    description: "Track performance across all locations in one dashboard"
  },
  {
    icon: Users,
    title: "Consistent Branding",
    description: "Unified brand message across every location"
  }
];

const results = [
  "Rank in top 3 for every location",
  "Centralized management dashboard",
  "Individual location performance tracking",
  "Citation building for all locations",
  "Review management at scale"
];

const process = [
  {
    number: "01",
    title: "Location Audit",
    description: "Assess current performance of each location"
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Create custom strategy for multi-location success"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Roll out optimizations across all locations"
  },
  {
    number: "04",
    title: "Scale & Monitor",
    description: "Track and optimize each location's performance"
  }
];

export default function MultiLocationSEO() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Multi-Location SEO</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Dominate Every Market You Serve
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Multiple locations mean multiple opportunities. Our <span className="font-bold">multi-location SEO</span> strategies
                  help you <span className="text-blue-600 font-bold">rank at the top in every market</span>, with centralized
                  management and location-specific optimization.
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
                      Get Multi-Location Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Schedule Demo
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
                    <CardTitle className="text-2xl">Average Results Per Location</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Top 3 Rankings</span>
                      <span className="text-2xl font-bold text-blue-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Organic Traffic Increase</span>
                      <span className="text-2xl font-bold text-green-600">+215%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Locations Managed</span>
                      <span className="text-2xl font-bold text-purple-600">5-50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Review Response Rate</span>
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
              <h2 className="text-4xl font-bold mb-4">Multi-Location SEO at Scale</h2>
              <p className="text-xl text-gray-600">
                Manage all your locations from one central platform
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
              <h2 className="text-4xl font-bold mb-4">Our Multi-Location Process</h2>
              <p className="text-xl text-gray-600">
                Strategic approach to scaling SEO across all your locations
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
              Ready to Scale Your Local SEO?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a multi-location SEO audit and see how we'll help you dominate every market you serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Multi-Location Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Talk to SEO Expert
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
