import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { AccessibleForm, FormField } from '@/components/accessible-form';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (data: any) => {
    // Handle form submission
    console.log('Form submitted:', data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Contact Whitebrd Co | Digital Marketing Agency National"
        description="Contact Whitebrd Co, a nationwide digital marketing agency for SEO, PPC, and web design services. Reach out to grow your business today!"
        keywords="contact whitebrd, digital marketing agency contact, SEO services contact, PPC services contact, web design contact, marketing consultation"
        canonicalUrl="https://whitebrd.co/contact"
        ogTitle="Contact Whitebrd Co | Digital Marketing Agency National"
        ogDescription="Get in touch with Whitebrd Co for nationwide digital marketing services. Let's grow your business together."
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            {...fadeInUp}
          >
            Contact Whitebrd Co – Nationwide Marketing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to transform your digital presence? Let's discuss how we can help your business grow with our proven marketing strategies.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Marketing Consultation</h2>
              <AccessibleForm onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={(value) => setFormData({...formData, firstName: value})}
                    helpText="Your first name"
                    autoComplete="given-name"
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={(value) => setFormData({...formData, lastName: value})}
                    helpText="Your last name"
                    autoComplete="family-name"
                  />
                </div>
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(value) => setFormData({...formData, email: value})}
                  helpText="We'll use this to contact you"
                  autoComplete="email"
                  inputMode="email"
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(value) => setFormData({...formData, phone: value})}
                  helpText="Optional - for urgent matters"
                  autoComplete="tel"
                  inputMode="tel"
                />
                <FormField
                  label="Company Name"
                  name="company"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(value) => setFormData({...formData, company: value})}
                  autoComplete="organization"
                />
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 text-base leading-normal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 hover:border-gray-400"
                    style={{ fontSize: '16px' }}
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Service Interest</option>
                    <option value="seo">SEO Services</option>
                    <option value="website">Website Design</option>
                    <option value="ppc">PPC Management</option>
                    <option value="content">Content Marketing</option>
                    <option value="social">Social Media Management</option>
                    <option value="technical">Technical SEO</option>
                    <option value="google">Google Ads</option>
                    <option value="full">Full Digital Marketing Package</option>
                  </select>
                </div>
                <FormField
                  label="Tell us about your project and goals"
                  name="message"
                  type="textarea"
                  placeholder="I need help with..."
                  required
                  value={formData.message}
                  onChange={(value) => setFormData({...formData, message: value})}
                  helpText="The more details, the better we can help"
                />
              </AccessibleForm>
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiPhone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (888) XXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiMail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">hello@whitebrd.co</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiMapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Service Area</h3>
                      <p className="text-gray-600">Nationwide - United States</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiClock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday - Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Google Business Profile Map Embed */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Find Us on Google</h3>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {/* Replace with actual Google Business Profile map embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMDcnMTEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Whitebrd Co Google Business Profile"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * We serve clients nationwide with remote and on-site consultations available
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings-na2.hubspot.com/jakob-thompson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+18881234567"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: (888) XXX-XXXX
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}