import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Zap, Shield, Search, Database, Globe, Wrench, Rocket } from 'lucide-react';
import { Link } from 'wouter';

const features = [
  {
    icon: Zap,
    title: "Site Speed Optimization",
    description: "Lightning-fast load times that improve rankings and conversions"
  },
  {
    icon: Shield,
    title: "Core Web Vitals",
    description: "Meet Google's performance standards for better rankings"
  },
  {
    icon: Database,
    title: "Structured Data",
    description: "Rich snippets that stand out in search results"
  },
  {
    icon: Globe,
    title: "Crawlability & Indexing",
    description: "Ensure search engines can find and index all your pages"
  }
];

const results = [
  "50% average improvement in page speed",
  "Complete technical SEO audits",
  "Mobile-first optimization included",
  "Schema markup implementation",
  "Ongoing monitoring and maintenance"
];

const process = [
  {
    number: "01",
    title: "Technical Audit",
    description: "Deep analysis of your site's technical foundation"
  },
  {
    number: "02",
    title: "Prioritization",
    description: "Identify critical issues impacting your rankings"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Fix technical issues and optimize performance"
  },
  {
    number: "04",
    title: "Monitor & Maintain",
    description: "Continuous monitoring to prevent future issues"
  }
];

export default function TechnicalSEO() {
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
                <Badge className="mb-4 bg-blue-100 text-blue-700">Technical SEO</Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Fix Technical Issues That Block Your Rankings
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Technical SEO problems cost you rankings. Our <span className="font-bold">technical SEO experts</span> find
                  and fix every issue holding you back, from <span className="text-blue-600 font-bold">site speed to structured
                  data</span>, ensuring search engines can properly crawl, index, and rank your site.
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
                      Get Technical SEO Audit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      View Sample Report
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
                    <CardTitle className="text-2xl">Technical Improvements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Page Speed Improvement</span>
                      <span className="text-2xl font-bold text-blue-600">+50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Core Web Vitals</span>
                      <span className="text-2xl font-bold text-green-600">Pass</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Indexation Rate</span>
                      <span className="text-2xl font-bold text-purple-600">95%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mobile Usability</span>
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
              <h2 className="text-4xl font-bold mb-4">Complete Technical SEO Solutions</h2>
              <p className="text-xl text-gray-600">
                Everything needed for a technically perfect website
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
              <h2 className="text-4xl font-bold mb-4">Our Technical SEO Process</h2>
              <p className="text-xl text-gray-600">
                Systematic fixes that deliver lasting improvements
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
              Ready to Fix Your Technical SEO Issues?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a comprehensive technical SEO audit and see exactly what's holding back your rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Technical Audit
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
