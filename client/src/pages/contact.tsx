import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Select Service Interest</option>
                  <option>SEO Services</option>
                  <option>Website Design</option>
                  <option>PPC Management</option>
                  <option>Content Marketing</option>
                  <option>Social Media Management</option>
                  <option>Technical SEO</option>
                  <option>Google Ads</option>
                  <option>Full Digital Marketing Package</option>
                </select>
                <textarea
                  placeholder="Tell us about your project and goals"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
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