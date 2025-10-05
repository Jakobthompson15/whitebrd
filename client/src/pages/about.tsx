import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase, TrendingUp, Users, Target, Rocket, Heart,
  Zap, Shield, Award, CheckCircle, DollarSign, Code
} from 'lucide-react';
import { Link } from 'wouter';

const values = [
  {
    icon: TrendingUp,
    title: "Results Obsessed",
    description: "Your revenue > our retainers. We measure success by your growth, not vanity metrics."
  },
  {
    icon: Zap,
    title: "Speed & Innovation",
    description: "Fast wins, rapid testing, never settling. We move at startup speed with enterprise reliability."
  },
  {
    icon: Shield,
    title: "True Partnership",
    description: "Your goals = our mission. We're not vendors, we're growth partners invested in your success."
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "Continuous improvement, cutting-edge strategies, and obsessive attention to what works."
  }
];

const timeline = [
  {
    year: "2010-2015",
    title: "The Foundation Years",
    description: "Jamie & Jakob cut their teeth in digital marketing, learning what works (and what doesn't) across dozens of industries."
  },
  {
    year: "2016-2020",
    title: "Building & Scaling",
    description: "Built and sold our own businesses, learned the hard lessons, celebrated the wins."
  },
  {
    year: "2021-2023",
    title: "The Whitebrd Vision",
    description: "Combined our expertise to help others achieve the growth we experienced firsthand."
  },
  {
    year: "2024-Present",
    title: "Scaling Impact",
    description: "500+ businesses transformed, $50M+ in client revenue generated, and we're just getting started."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Whitebrd Co | Your Growth-Obsessed Marketing Partners"
        description="Founded by entrepreneurs who've built and sold businesses. We become obsessed with your success. 500+ businesses transformed, $50M+ revenue generated."
        keywords="about whitebrd, digital marketing agency, marketing partners, growth marketing, Jamie Jakob founders, business growth, revenue focused marketing"
        canonicalUrl="https://whitebrd.co/about"
        ogTitle="About Whitebrd Co | Your Growth-Obsessed Marketing Partners"
        ogDescription="We've been in your shoes. Built businesses, scaled them, failed, and succeeded. Now we use what we've learned to catapult YOUR business higher."
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              The Whitebrd Story
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              We've Been in Your Shoes
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              <span className="font-semibold">Built businesses from scratch. Scaled them. Failed. Succeeded.</span> Our obsession:
              use what we've learned to catapult YOUR business higher, faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Let's Talk Growth
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  See Our Impact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Whitebrd Exists */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl border-2 border-gray-200">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Why Whitebrd Exists
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-xl mb-6 text-center italic">
                    "We've been where you are. We've felt the pressure, the uncertainty, the exhilaration of growth.
                    We've made the mistakes, learned the lessons, and discovered what actually moves the needle."
                  </p>

                  <p className="mb-4">
                    <strong>Not agency robots:</strong> We become obsessed with your success. Whether you're a law firm fighting for
                    market share, a SaaS startup ready to scale, a dentist wanting a full calendar, or a home services pro
                    ready to dominate your city—we celebrate your wins and lose sleep over your setbacks.
                  </p>

                  <p className="text-lg font-semibold text-center mt-8 text-blue-600">
                    We don't rest until growth is unlocked.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-xl text-gray-600">
              Two entrepreneurs. Complementary skills. One obsession: your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Jamie */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      J
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Jamie</CardTitle>
                      <Badge>Growth Strategist</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>The revenue engineer.</strong> Jamie has generated $2M+ in revenue for clients across every vertical
                      imaginable. From law firms to e-commerce brands, Jamie knows how to find the growth levers and pull them hard.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Master of conversion optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Data-driven growth strategist</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Multi-industry expertise</span>
                      </div>
                    </div>

                    <p className="italic text-gray-600">
                      "Every business has untapped revenue. My job is to find it and unlock it."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Jakob */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      J
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Jakob</CardTitle>
                      <Badge>Technical Marketing Expert</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>The builder who sold.</strong> Jakob built and sold a business from the ground up. Equal parts
                      technical wizard and marketing strategist, he brings the rare combination of code + hustle to every project.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Exited founder (built & sold)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Technical SEO & development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Systems & automation expert</span>
                      </div>
                    </div>

                    <p className="italic text-gray-600">
                      "I've been through the entire journey. Now I help others skip the painful parts."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white/90">
              The principles that drive every decision, every strategy, every success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 mb-4 text-white" />
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-white/80 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From learning to leading, every step made us who we are
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`hover:shadow-lg transition-all ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} md:w-3/4`}>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{item.year}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's become obsessed with your growth together. Your next chapter starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Your Free Growth Analysis
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Let's Talk Strategy
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">$50M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}