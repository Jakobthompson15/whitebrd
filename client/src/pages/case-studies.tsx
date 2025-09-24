import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Target, Award, BarChart, DollarSign } from 'lucide-react';
import { Link } from 'wouter';

const caseStudies = [
  {
    id: 1,
    client: "Local Home Services Company",
    industry: "Home Services",
    challenge: "Low online visibility and poor lead quality",
    solution: "Comprehensive local SEO strategy with targeted content",
    results: [
      { metric: "Organic Traffic", value: "+487%", icon: TrendingUp },
      { metric: "Qualified Leads", value: "+312%", icon: Users },
      { metric: "Revenue Growth", value: "+$2.4M", icon: DollarSign }
    ],
    testimonial: "Whitebrd transformed our online presence. We went from page 5 to dominating the top 3 positions for our key services.",
    duration: "6 months"
  },
  {
    id: 2,
    client: "E-Commerce Fashion Brand",
    industry: "E-Commerce",
    challenge: "High cart abandonment and low conversion rates",
    solution: "Site speed optimization and conversion rate optimization",
    results: [
      { metric: "Page Speed", value: "+94%", icon: BarChart },
      { metric: "Conversion Rate", value: "+156%", icon: Target },
      { metric: "Revenue/Visitor", value: "+$18.50", icon: DollarSign }
    ],
    testimonial: "The improvements to our site performance directly impacted our bottom line. Best investment we've made.",
    duration: "3 months"
  },
  {
    id: 3,
    client: "B2B Software Company",
    industry: "Technology",
    challenge: "Struggling to generate qualified enterprise leads",
    solution: "Content marketing and technical SEO overhaul",
    results: [
      { metric: "Enterprise Leads", value: "+220%", icon: Award },
      { metric: "Organic Keywords", value: "+1,847", icon: TrendingUp },
      { metric: "MRR Growth", value: "+$125K", icon: DollarSign }
    ],
    testimonial: "Whitebrd's strategic approach to B2B SEO helped us reach decision-makers we couldn't access before.",
    duration: "8 months"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Case Studies | Whitebrd Co - Proven Results"
        description="Explore our client success stories. See how we've helped businesses achieve 200-500% growth through strategic digital marketing."
        keywords="case studies, client results, SEO success stories, digital marketing results"
        canonicalUrl="https://whitebrd.co/case-studies"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Proven Results
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Real Results for Real Businesses
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Discover how we've helped companies like yours achieve explosive growth
              through data-driven digital marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Average Traffic Increase", value: "387%" },
              { label: "Average ROI", value: "12X" },
              { label: "Client Retention", value: "96%" },
              { label: "Total Revenue Generated", value: "$47M+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Left Side - Details */}
                    <div className="p-8 lg:p-12">
                      <Badge className="mb-4">{study.industry}</Badge>
                      <h2 className="text-3xl font-bold mb-4">{study.client}</h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Timeline:</h3>
                          <p className="text-gray-600">Results achieved in {study.duration}</p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
                        "{study.testimonial}"
                      </blockquote>

                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Right Side - Results */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12">
                      <h3 className="text-2xl font-bold mb-6">Key Results</h3>
                      <div className="space-y-6">
                        {study.results.map((result, resultIndex) => (
                          <motion.div
                            key={resultIndex}
                            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: resultIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                              <result.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-2xl font-bold text-gray-900">
                                {result.value}
                              </div>
                              <div className="text-gray-600">{result.metric}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Your Free Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}