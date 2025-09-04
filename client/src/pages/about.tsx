import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Target, Rocket, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="About Us - The Whitebrd Story | Digital Marketing Agency"
        description="Meet Jamie and Jakob, the founders of Whitebrd Co. Two marketing experts with over 14 years combined experience, driven to help businesses from startups to enterprises achieve explosive growth."
        keywords="about whitebrd, digital marketing agency founders, marketing experts, Jamie Jakob, business growth specialists, marketing agency story"
        canonicalUrl="https://whitebrd.com/about"
        ogTitle="Meet the Whitebrd Founders - Jamie & Jakob"
        ogDescription="Two marketing experts united by one mission: helping businesses dominate their markets through strategic digital marketing."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="font-marker text-5xl sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto font-hand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Two marketers. One mission. Unlimited potential for your business.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black text-white p-8 rounded-lg shadow-xl"
          >
            <h2 className="font-marker text-3xl mb-4">Why Whitebrd Exists</h2>
            <p className="text-lg font-hand leading-relaxed">
              We've been in your shoes. We've built businesses from scratch, scaled them through sheer determination, 
              and learned what actually works in the trenches. Now, we're obsessed with one thing: 
              taking everything we've learned and using it to catapult your business to heights you didn't think were possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-marker text-4xl text-center mb-16">Meet the Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Jamie's Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/images/team/jamie.png" 
                  alt="Jamie - Co-Founder"
                  className="w-20 h-20 rounded-full object-cover border-2 border-black"
                />
                <div className="ml-4">
                  <h3 className="font-marker text-2xl">Jamie</h3>
                  <p className="text-gray-600">Co-Founder & Growth Strategist</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="font-hand text-lg">
                  With over 6 years in the marketing trenches, Jamie isn't your typical marketer. 
                  He's a growth architect who's orchestrated campaigns that have generated over <strong>$2M+ in revenue</strong> across 
                  every industry imaginable.
                </p>
                
                <p className="font-hand text-lg">
                  From scrappy startups operating out of garages to Fortune 500 enterprises with boardrooms bigger than most offices, 
                  Jamie has an almost obsessive drive to unlock growth potential wherever it exists. He doesn't just run campaigns; 
                  he engineers revenue machines.
                </p>
                
                <p className="font-hand text-lg">
                  His philosophy? <em>"Every business has a growth ceiling they haven't discovered yet. I'm here to blow right through it."</em>
                </p>
                
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">6+ Years Experience</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">$2M+ Generated</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">All Industries</span>
                </div>
              </div>
            </motion.div>

            {/* Jakob's Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/images/team/jakob.jpg" 
                  alt="Jakob - Co-Founder"
                  className="w-20 h-20 rounded-full object-cover border-2 border-black"
                />
                <div className="ml-4">
                  <h3 className="font-marker text-2xl">Jakob</h3>
                  <p className="text-gray-600">Co-Founder & Technical Marketing Expert</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="font-hand text-lg">
                  At just 15 years old, Jakob didn't wait for permission to become an entrepreneur. 
                  He launched a pressure washing business with his best friend, learning business the hard way—through pure hustle.
                </p>
                
                <p className="font-hand text-lg">
                  When his partner left for other ventures, most would have quit. Not Jakob. 
                  He doubled down, leveraging his <strong>software engineering skills</strong>, mastering <strong>social media marketing</strong>, 
                  and yes—literally <strong>knocking on doors</strong> to grow the business. The result? A successful exit that proved 
                  his methodology works.
                </p>
                
                <p className="font-hand text-lg">
                  Now with 8 years of marketing expertise, Jakob combines technical precision with street-smart marketing tactics. 
                  His mission is simple: <em>"I built and sold a business from nothing. Now I'm obsessed with helping others do the same—but faster."</em>
                </p>
                
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">8 Years Marketing</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">Built & Sold Business</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">Software Engineer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Force Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="font-marker text-4xl mb-6">Together, We're Unstoppable</h2>
            <p className="text-xl text-gray-700 font-hand mb-8">
              Jamie's strategic brilliance + Jakob's technical execution = Your business's unfair advantage
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="font-marker text-xl mb-2">14+ Years Combined</h3>
                <p className="text-gray-600">Battle-tested experience across every market condition</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="font-marker text-xl mb-2">$2M+ Generated</h3>
                <p className="text-gray-600">Proven track record of driving real revenue</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="font-marker text-xl mb-2">All Business Sizes</h3>
                <p className="text-gray-600">From solo entrepreneurs to enterprise corporations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-500" />
            <h2 className="font-marker text-4xl mb-6">Our Promise to You</h2>
            <p className="text-xl text-gray-700 font-hand leading-relaxed">
              We don't just manage marketing campaigns. We become obsessed with your success. 
              We celebrate your wins, lose sleep over your challenges, and won't rest until we've 
              unlocked growth you didn't know was possible. Whether you're a small business fighting 
              to compete or an enterprise looking to dominate—we're in your corner, ready to fight.
            </p>
            
            <div className="mt-12">
              <a 
                href="/#connect"
                className="inline-block bg-black text-white px-8 py-4 font-marker text-xl hover:bg-gray-800 transition-colors"
              >
                Let's Build Something Amazing Together
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-marker text-4xl text-center mb-12 text-black">What Drives Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-black hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="font-marker text-4xl mb-4">🎯</div>
                <h3 className="font-marker text-xl mb-3 text-black">Results Obsessed</h3>
                <p className="text-gray-600 font-hand">We measure success in your revenue, not our retainers</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-black hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="font-marker text-4xl mb-4">🚀</div>
                <h3 className="font-marker text-xl mb-3 text-black">Speed Matters</h3>
                <p className="text-gray-600 font-hand">Fast execution, rapid testing, quick wins</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-black hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="font-marker text-4xl mb-4">💡</div>
                <h3 className="font-marker text-xl mb-3 text-black">Always Innovating</h3>
                <p className="text-gray-600 font-hand">If it worked yesterday, we're already improving it</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-black hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="font-marker text-4xl mb-4">🤝</div>
                <h3 className="font-marker text-xl mb-3 text-black">True Partnership</h3>
                <p className="text-gray-600 font-hand">Your success is our success, period</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}