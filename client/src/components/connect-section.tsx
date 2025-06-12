import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { insertContactSchema, insertNewsletterSchema, type InsertContact, type InsertNewsletter } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ConnectSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formsRef, isVisible: formsVisible } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Contact form
  const contactForm = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Newsletter form
  const newsletterForm = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: ''
    }
  });

  // Contact mutation
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      contactForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
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

  const onContactSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

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
            Get Your Free Marketing Audit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exactly how to dominate your local market and generate more qualified leads for your HVAC or plumbing business
          </p>
        </motion.div>
        
        <div ref={formsRef} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white text-black p-8 border-2 border-white"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-marker-bold text-2xl mb-6 tracking-wide">Get Your Free Audit</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll analyze your current digital presence and show you exactly how to get more customers.
            </p>
            <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">Business Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Company Name"
                  {...contactForm.register('name')}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...contactForm.register('email')}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your business</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="What services do you offer? What's your biggest challenge with getting new customers?"
                  {...contactForm.register('message')}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-black text-white py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border-2 border-black"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Sending...' : 'Get My Free Audit'}
              </Button>
            </form>
          </motion.div>
          
          {/* Value Proposition */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h3 className="font-lato-bold text-2xl mb-6 tracking-wide">What You'll Get:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Digital Audit</h4>
                    <p className="text-gray-300 text-sm">Analysis of your website, Google Business Profile, and online presence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Competitor Analysis</h4>
                    <p className="text-gray-300 text-sm">See what your competitors are doing and how to beat them</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Strategy</h4>
                    <p className="text-gray-300 text-sm">Personalized plan to dominate your local market</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Revenue Projections</h4>
                    <p className="text-gray-300 text-sm">Realistic estimates of additional revenue you could generate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 border-2 border-gray-700">
              <h4 className="font-lato-bold text-lg mb-4">Join Our Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get weekly tips on generating more leads for your HVAC or plumbing business.
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
