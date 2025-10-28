import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, organizationSchema } from '@/components/seo';
import { VideoBackground } from '@/components/video-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp, Users, DollarSign, Award, ArrowRight, Target, Zap,
  BarChart3, MapPin, ShoppingCart, Code, Megaphone, Search, PenTool,
  CheckCircle, Star, Building2, Briefcase, Heart, Store, Scale, Home as HomeIcon
} from 'lucide-react';
import { Link } from 'wouter';

const stats = [
  { icon: Users, value: "500+", label: "Businesses Served" },
  { icon: DollarSign, value: "$50M+", label: "Revenue Generated" },
  { icon: Award, value: "14+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Client Retention" },
  { icon: Target, value: "150%", label: "Avg Visibility Increase" },
  { icon: Zap, value: "30 Days", label: "Time to Results" }
];

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search and be #1 when customers search for your services",
    link: "/services/local-seo",
    results: "150% visibility increase"
  },
  {
    icon: Search,
    title: "National SEO",
    description: "Scale beyond geography and become the industry authority nationwide",
    link: "/services/national-seo",
    results: "450% organic growth"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Growth",
    description: "Turn your online store into a revenue-generating machine",
    link: "/services/ecommerce-seo",
    results: "3x conversion rates"
  },
  {
    icon: PenTool,
    title: "Web Design",
    description: "Beautiful websites engineered to convert visitors into customers",
    link: "/services/web-design",
    results: "Built for conversions"
  },
  {
    icon: Megaphone,
    title: "PPC & Google Ads",
    description: "Instant visibility with campaigns that deliver immediate ROI",
    link: "/services/ppc-google-ads",
    results: "12:1 average ROI"
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Turn more visitors into customers with data-driven optimization",
    link: "/services/conversion-optimization",
    results: "2x conversion rates"
  }
];

const industries = [
  { icon: Scale, name: "Legal", link: "/industries/legal" },
  { icon: Heart, name: "Healthcare", link: "/industries/healthcare" },
  { icon: HomeIcon, name: "Home Services", link: "/industries/home-services" },
  { icon: Store, name: "E-Commerce", link: "/industries/ecommerce" },
  { icon: Code, name: "SaaS", link: "/industries/saas" },
  { icon: Building2, name: "Real Estate", link: "/industries/real-estate" },
  { icon: Briefcase, name: "Professional", link: "/industries/professional" }
];

const recentWins = [
  {
    client: "Law Firm",
    result: "400% more leads in 6 months",
    revenue: "$2.1M generated"
  },
  {
    client: "HVAC Company",
    result: "150% local visibility spike",
    revenue: "280% call volume increase"
  },
  {
    client: "E-Commerce Brand",
    result: "$50K to $500K in 18 months",
    revenue: "900% revenue growth"
  }
];

const process = [
  {
    number: "01",
    title: "Free 30-Min Audit",
    description: "Live website review and competitor analysis"
  },
  {
    number: "02",
    title: "Custom Strategy",
    description: "Personalized 90-day growth roadmap"
  },
  {
    number: "03",
    title: "Rapid Execution",
    description: "Fast implementation with quick wins"
  },
  {
    number: "04",
    title: "Scale & Dominate",
    description: "Continuous optimization for market leadership"
  }
];

export default function Home() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Strategic Digital Marketing for Growth | Whitebrd Co"
        description="Dominate your market online & offline. 500+ businesses served, $50M+ revenue generated. Get your free marketing audit and custom growth strategy today."
        keywords="digital marketing agency, SEO services, local SEO, national SEO, web design, PPC management, Google Ads, conversion optimization, content marketing, review management"
        canonicalUrl="https://whitebrd.co/"
        ogTitle="Strategic Digital Marketing for Growth | Whitebrd Co"
        ogDescription="Transform your business with proven digital marketing. 500+ success stories. Free audit available."
        structuredData={organizationSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <VideoBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                🚀 500+ Businesses Transformed • $50M+ Revenue Generated
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Strategic Digital Marketing
                <span className="block text-4xl md:text-6xl mt-2">for Unstoppable Growth</span>
              </h1>

              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
                <span className="font-semibold">Dominate Your Market Online & Offline.</span> We obsess over your revenue,
                not vanity metrics. From local businesses to national brands, we deliver results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/free-audit">
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Free Marketing Audit →
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow bg-white relative z-30">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-Spectrum Marketing That Delivers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need local dominance, national reach, or e-commerce scale,
              we have the proven strategies to get you there.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <service.icon className="w-10 h-10 text-blue-600" />
                      <Badge variant="secondary">{service.results}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={service.link}>
                      <Button className="w-full group-hover:bg-blue-600">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sales Funnel Highlight */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Whitebrd Difference: Your Free Growth Analysis
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold mb-4 text-white/20">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/free-audit">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Your Free Audit Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why We're Different
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Results Obsessed</h3>
                    <p className="text-gray-600">Your revenue matters more than our retainer. We celebrate your wins and lose sleep over your challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Partner, Not Vendor</h3>
                    <p className="text-gray-600">We become obsessed with your success. Your goals become our mission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Speed & Innovation</h3>
                    <p className="text-gray-600">Fast wins, rapid testing, and continuous improvement. Never settle, always evolving.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Technical + Creative Force</h3>
                    <p className="text-gray-600">Founded by entrepreneurs who've built, scaled, and sold businesses. We know what it takes.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Latest Wins</CardTitle>
                  <CardDescription>Real results from the last 90 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentWins.map((win, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <div className="font-semibold">{win.client}</div>
                      <div className="text-sm text-gray-600">{win.result}</div>
                      <div className="text-sm font-bold text-green-600">{win.revenue}</div>
                    </div>
                  ))}
                  <Link href="/case-studies">
                    <Button className="w-full mt-4">
                      View All Success Stories
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Help Every Industry Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From service businesses to SaaS platforms, retailers to professional firms—we deliver custom strategies that work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={industry.link}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer group">
                    <CardContent className="pt-6 pb-4 text-center">
                      <industry.icon className="w-8 h-8 mx-auto mb-2 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      <div className="text-sm font-medium">{industry.name}</div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/industries">
              <Button size="lg" variant="outline">
                Explore All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Unlock Unfair Growth, Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ businesses that chose growth over guesswork. Your competition won't know what hit them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Get Your Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}