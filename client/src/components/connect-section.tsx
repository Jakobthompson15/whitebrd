import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { insertNewsletterSchema, type InsertNewsletter } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { AccessibleButton } from './accessible-button';
import { Input } from '@/components/ui/input';
import { Calendar, Phone, CheckCircle, Star, ArrowRight, Mail } from 'lucide-react';
import { useRef } from 'react';

export function ConnectSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formsRef, isVisible: formsVisible } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Newsletter form
  const newsletterForm = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: ''
    }
  });

  // Newsletter mutation
  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest('POST', '/api/newsletter', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      newsletterForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onNewsletterSubmit = (data: InsertNewsletter) => {
    newsletterMutation.mutate(data);
  };

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Live Website Review",
      description: "Real-time analysis of your website, Google rankings, and online presence"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Real-Time Competitor Analysis", 
      description: "We'll show you what your competitors are doing and how to beat them"
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Personalized Growth Roadmap",
      description: "Custom 90-day plan to dominate your market and grow revenue"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Revenue Opportunity Assessment",
      description: "Realistic projections of additional revenue you could capture"
    }
  ];

  return (
    <section ref={sectionRef} id="connect" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="connectGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#connectGrid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wider uppercase mb-6 rounded-full shadow-lg"
            initial={{ scale: 0, rotate: -5 }}
            animate={titleVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Ready to Grow?
          </motion.span>
          <motion.h2 
            className="font-marker text-4xl sm:text-5xl lg:text-7xl mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Schedule Your Free
            </span>
            <br />
            <span className="text-white">Marketing Audit</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Book a 30-minute call to discover exactly how to dominate your market and generate more qualified demand for your business
          </motion.p>
        </motion.div>
        
        <div ref={formsRef} className="grid lg:grid-cols-2 gap-12">
          {/* Calendar Booking */}
          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 text-black p-10 rounded-3xl shadow-2xl border border-gray-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={formsVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
            
            <motion.h3 
              className="text-3xl font-bold mb-6 flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={formsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Calendar className="w-8 h-8 text-blue-600" />
              <span>Schedule Your Free Audit</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={formsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Book a 30-minute strategy call where we'll analyze your current digital presence live and show you exactly how to get more customers.
            </motion.p>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <AccessibleButton
                  onClick={() => window.open('https://meetings-na2.hubspot.com/jakob-thompson?uuid=ac532047-5668-4f28-85e8-c4c73d0a3a15', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 group"
                  aria-label="Schedule marketing audit - opens calendar in new window"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Now
                </AccessibleButton>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={formsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="h-px bg-gray-300 flex-1" />
                <span className="px-4 text-gray-500 text-sm">or</span>
                <div className="h-px bg-gray-300 flex-1" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AccessibleButton
                  onClick={() => window.open('tel:8436243329', '_self')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 py-5 text-lg font-semibold rounded-xl border-2 border-gray-900 shadow-lg transition-all duration-200 group"
                  aria-label="Call us at 843-624-3329"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now: (843) 624-3329
                </AccessibleButton>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Available:</strong> Mon-Fri, 9 AM - 6 PM EST</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Response time:</strong> Same day booking confirmation
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Value Proposition */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <motion.h3 
                className="font-marker text-3xl mb-8 tracking-wide text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={formsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What You'll Get in Our Call:
              </motion.h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={formsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white text-lg">{benefit.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-marker text-2xl text-white">Join Our Newsletter</h4>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Get weekly tips on SEO, CRO, and content that reliably drives growth across industries.
              </p>
              
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...newsletterForm.register('email')}
                  className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <AccessibleButton
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 font-semibold rounded-xl shadow-lg transition-all duration-200 group"
                  disabled={newsletterMutation.isPending}
                  isLoading={newsletterMutation.isPending}
                  aria-label="Subscribe to newsletter"
                >
                  {newsletterMutation.isPending ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Subscribe Now</span>
                    </span>
                  )}
                </AccessibleButton>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}