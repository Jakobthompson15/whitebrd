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
    <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-center mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        
        <div ref={formsRef} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 border-2 border-black"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-bebas text-2xl mb-6 tracking-wide">Start Your Project</h3>
            <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...contactForm.register('name')}
                  className="form-input"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...contactForm.register('email')}
                  className="form-input"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  {...contactForm.register('message')}
                  className="form-textarea"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
          
          {/* Newsletter Signup */}
          <motion.div 
            className="bg-white p-8 border-2 border-black"
            initial={{ opacity: 0, y: 30 }}
            animate={formsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="font-bebas text-2xl mb-6 tracking-wide">Stay Updated</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Get exclusive insights, case studies, and digital marketing tips delivered to your inbox monthly.
            </p>
            <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">Email Address</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  {...newsletterForm.register('email')}
                  className="form-input"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Join 2,500+ marketing professionals who trust our insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
