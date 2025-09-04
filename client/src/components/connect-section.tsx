import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { insertNewsletterSchema, type InsertNewsletter } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ConnectSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formsRef, isVisible: formsVisible } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

  return (
    <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-4 block">
            Ready to Grow?
          </span>
          <h2 className="font-marker text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Schedule Your Free Marketing Audit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a 30-minute call to discover exactly how to dominate your market and generate more qualified demand for your business
          </p>
        </motion.div>
        
        <div ref={formsRef} className="grid lg:grid-cols-2 gap-12">
          {/* Calendar Booking */}
          <motion.div 
            className="bg-white text-black p-8 border-2 border-white"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-6">Schedule Your Free Audit</h3>
            <p className="text-gray-600 mb-8">
              Book a 30-minute strategy call where we'll analyze your current digital presence live and show you exactly how to get more customers.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={() => window.open('https://meetings-na2.hubspot.com/jakob-thompson?uuid=ac532047-5668-4f28-85e8-c4c73d0a3a15', '_blank')}
                className="w-full bg-black text-white py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-200 border-2 border-black"
              >
                📅 Schedule Now
              </Button>
              
              <div className="text-center text-gray-500">
                <span className="text-sm">or</span>
              </div>
              
              <Button 
                onClick={() => window.open('tel:8436243329', '_self')}
                className="w-full bg-white text-black py-4 text-lg font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-black"
              >
                📞 Call Now: (843) 624-3329
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded border">
              <p className="text-sm text-gray-600 text-center">
                <strong>Available:</strong> Monday - Friday, 9 AM - 6 PM EST<br/>
                <strong>Response time:</strong> Same day booking confirmation
              </p>
            </div>
          </motion.div>
          
          {/* Value Proposition */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h3 className="font-lato-bold text-2xl mb-6 tracking-wide">What You'll Get in Our 30-Minute Call:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Website Review</h4>
                    <p className="text-gray-300 text-sm">Real-time analysis of your website, Google rankings, and online presence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Competitor Analysis</h4>
                    <p className="text-gray-300 text-sm">We'll show you what your competitors are doing and how to beat them</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Growth Roadmap</h4>
                    <p className="text-gray-300 text-sm">Custom 90-day plan to dominate your market and grow revenue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Revenue Opportunity Assessment</h4>
                    <p className="text-gray-300 text-sm">Realistic projections of additional revenue you could capture</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 border-2 border-gray-700">
              <h4 className="font-lato-bold text-lg mb-4">Join Our Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get weekly tips on SEO, CRO, and content that reliably drives growth across industries.
              </p>
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...newsletterForm.register('email')}
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-200"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe Now'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
