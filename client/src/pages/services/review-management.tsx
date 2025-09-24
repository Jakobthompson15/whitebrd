import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

export default function ReviewManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-blue-100 text-blue-700">
                  <Star className="w-4 h-4 mr-2" />
                  Review Management
                </Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Review Management Services
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Build a stellar online reputation with our comprehensive review management and reputation building services.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-2xl mx-auto">
                  <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Coming Soon</h2>
                  <p className="text-yellow-700 mb-6">
                    We're building advanced review management tools to help you monitor, respond to, and generate more positive reviews across all platforms.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Get Notified When Available
                      </Button>
                    </Link>
                    <Link href="/services/local-seo">
                      <Button size="lg" variant="outline">
                        View Other Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}