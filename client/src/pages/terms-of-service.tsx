import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, FileText, Users, AlertCircle, Ban, HandshakeIcon, Globe, ShieldCheck } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: HandshakeIcon,
      title: "Agreement to Terms",
      content: [
        "By accessing and using Whitebrd Co's website and services, you agree to be bound by these Terms of Service.",
        "If you disagree with any part of these terms, you may not access our services.",
        "We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance."
      ]
    },
    {
      icon: Users,
      title: "Use of Services",
      subsections: [
        {
          subtitle: "Eligibility",
          items: [
            "You must be at least 18 years old to use our services",
            "You must provide accurate and complete information",
            "You are responsible for maintaining the confidentiality of your account"
          ]
        },
        {
          subtitle: "Acceptable Use",
          items: [
            "Use services only for lawful purposes",
            "Do not interfere with or disrupt our services",
            "Do not attempt to gain unauthorized access",
            "Respect intellectual property rights",
            "Do not use our services to send spam or malicious content"
          ]
        }
      ]
    },
    {
      icon: FileText,
      title: "Services Description",
      content: [
        "Whitebrd Co provides digital marketing services including SEO, web design, PPC management, and related consulting.",
        "Services are provided on a project or retainer basis as agreed in separate service agreements.",
        "We reserve the right to modify or discontinue services with reasonable notice.",
        "Service levels and deliverables are defined in individual service agreements."
      ]
    },
    {
      icon: Scale,
      title: "Payment Terms",
      subsections: [
        {
          subtitle: "Fees and Billing",
          items: [
            "Fees are specified in service agreements or proposals",
            "Payment terms are typically Net 30 unless otherwise agreed",
            "Late payments may incur interest charges",
            "We reserve the right to suspend services for non-payment"
          ]
        },
        {
          subtitle: "Refunds",
          items: [
            "Refund policies vary by service type",
            "Setup fees are generally non-refundable",
            "Monthly retainers are non-refundable after work has commenced",
            "Specific refund terms are outlined in service agreements"
          ]
        }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Intellectual Property",
      subsections: [
        {
          subtitle: "Our Property",
          items: [
            "All content, designs, and materials we create remain our property until paid in full",
            "Our methodologies, processes, and tools remain our exclusive property",
            "Client receives license to use deliverables as specified in agreements"
          ]
        },
        {
          subtitle: "Client Property",
          items: [
            "Client retains ownership of materials provided to us",
            "Client grants us license to use materials for providing services",
            "Client warrants they have rights to all provided materials"
          ]
        }
      ]
    },
    {
      icon: Ban,
      title: "Limitation of Liability",
      content: [
        "Our total liability shall not exceed the amount paid for services in the past 12 months.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "We do not guarantee specific results or rankings.",
        "Client indemnifies us against third-party claims arising from their use of our services."
      ]
    },
    {
      icon: Globe,
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of the United States.",
        "Any disputes shall be resolved in the courts of applicable jurisdiction.",
        "Both parties consent to exclusive jurisdiction and venue in these courts."
      ]
    }
  ];

  const lastUpdated = "January 23, 2025";
  const effectiveDate = "January 1, 2025";

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service | Whitebrd Co"
        description="Terms and conditions for using Whitebrd Co's digital marketing services. Learn about our service agreements, acceptable use, and legal requirements."
        keywords="terms of service, legal terms, service agreement, terms and conditions"
        canonicalUrl="https://whitebrd.co/terms-of-service"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Scale className="w-3 h-3 mr-1" />
              Legal Agreement
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Terms of Service
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using Whitebrd Co's services.
              These terms govern your use of our website and services.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
              <span className="flex items-center">
                <strong className="mr-1">Effective:</strong> {effectiveDate}
              </span>
              <span className="flex items-center">
                <strong className="mr-1">Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 bg-white/90 backdrop-blur border-blue-100">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Important Notice</h2>
                <p className="text-gray-700">
                  These Terms of Service constitute a legally binding agreement between you and Whitebrd Co.
                  By using our services, you acknowledge that you have read, understood, and agree to be
                  bound by these terms. If you are entering into this agreement on behalf of a company,
                  you represent that you have the authority to bind such entity.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {index + 1}. {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-600 leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-gray-600">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}

            {/* Additional Terms */}
            <Card className="p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Warranties and Disclaimers</h3>
                  <p className="text-gray-600 mb-3">
                    Services are provided "as is" without warranties of any kind, either express or implied.
                    We do not warrant that services will be uninterrupted, error-free, or meet specific requirements.
                  </p>
                  <p className="text-gray-600">
                    Marketing results depend on many factors outside our control. We cannot guarantee
                    specific rankings, traffic levels, or conversion rates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Confidentiality</h3>
                  <p className="text-gray-600">
                    Both parties agree to maintain confidentiality of proprietary information shared
                    during the course of the business relationship. This includes business strategies,
                    customer data, and technical information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination</h3>
                  <p className="text-gray-600 mb-3">
                    Either party may terminate services according to the terms specified in service agreements.
                    Standard notice period is 30 days unless otherwise specified.
                  </p>
                  <p className="text-gray-600">
                    Upon termination, client shall pay all outstanding invoices and we will provide
                    reasonable transition assistance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Force Majeure</h3>
                  <p className="text-gray-600">
                    Neither party shall be liable for delays or failures in performance resulting from
                    acts beyond their reasonable control, including but not limited to acts of God,
                    natural disasters, war, terrorism, labor disputes, or internet service interruptions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Severability</h3>
                  <p className="text-gray-600">
                    If any provision of these terms is found to be unenforceable or invalid, that provision
                    shall be limited or eliminated to the minimum extent necessary so that these terms
                    shall otherwise remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Entire Agreement</h3>
                  <p className="text-gray-600">
                    These terms, together with any service agreements, constitute the entire agreement
                    between you and Whitebrd Co regarding our services and supersede all prior agreements
                    and understandings.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact for Legal */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="mb-6">
                If you have questions about our Terms of Service or need clarification on any section,
                please contact our legal team.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Email:</strong> legal@whitebrd.co
                </p>
                <p>
                  <strong>Address:</strong> United States
                </p>
              </div>

              <p className="mt-6 text-sm text-white/90">
                For service-related inquiries, please contact hello@whitebrd.co
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}