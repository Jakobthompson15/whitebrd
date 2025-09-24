import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, UserCheck, Mail, Database, Globe, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Information You Provide",
          items: [
            "Contact information (name, email, phone number, company)",
            "Project details and business goals submitted through forms",
            "Newsletter subscription email addresses",
            "Communications you send us"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          items: [
            "Browser type and version",
            "Operating system",
            "IP address and location data",
            "Pages visited and time spent on our site",
            "Referral source"
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "We use your information to:",
          items: [
            "Respond to your inquiries and provide requested services",
            "Send newsletters and marketing communications (with consent)",
            "Improve our website and services",
            "Analyze website usage and trends",
            "Comply with legal obligations",
            "Protect against fraud and security threats"
          ]
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Who We Share Information With",
      content: [
        {
          subtitle: "We may share information with:",
          items: [
            "Service providers who assist in our operations (email services, analytics, hosting)",
            "Professional advisors (lawyers, accountants) when necessary",
            "Law enforcement when required by law",
            "Potential buyers in case of business sale or merger"
          ]
        },
        {
          subtitle: "We never:",
          items: [
            "Sell your personal information to third parties",
            "Share your information for others' marketing purposes without consent"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "SSL/TLS encryption for data transmission",
            "Secure server infrastructure",
            "Regular security audits and updates",
            "Limited access to personal information",
            "Employee training on data protection"
          ]
        }
      ]
    },
    {
      icon: Globe,
      title: "Your Rights",
      content: [
        {
          subtitle: "You have the right to:",
          items: [
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Opt-out of marketing communications",
            "Data portability (receive your data in a structured format)",
            "Object to certain processing activities"
          ]
        }
      ]
    },
    {
      icon: Mail,
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "We use cookies for:",
          items: [
            "Essential website functionality",
            "Analytics to improve user experience",
            "Remembering your preferences",
            "Marketing and retargeting (with consent)"
          ]
        },
        {
          subtitle: "Managing Cookies",
          items: [
            "You can control cookies through browser settings",
            "Disabling cookies may affect website functionality"
          ]
        }
      ]
    }
  ];

  const lastUpdated = "January 23, 2025";
  const effectiveDate = "January 1, 2025";

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | Whitebrd Co"
        description="Learn how Whitebrd Co collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        keywords="privacy policy, data protection, GDPR, CCPA, personal information, cookies"
        canonicalUrl="https://whitebrd.co/privacy-policy"
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
              <Shield className="w-3 h-3 mr-1" />
              Your Privacy Matters
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Whitebrd Co, we take your privacy seriously. This policy explains how we collect,
              use, and protect your personal information.
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

      {/* Quick Summary */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 bg-white/90 backdrop-blur border-blue-100">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Quick Summary</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    We collect information you provide and basic analytics data to improve our services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    We never sell your personal information to third parties
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    You can opt-out of marketing communications at any time
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    We use industry-standard security measures to protect your data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    You have the right to access, correct, or delete your information
                  </li>
                </ul>
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
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
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
                </Card>
              </motion.div>
            ))}

            {/* Additional Sections */}
            <Card className="p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Children's Privacy</h3>
                  <p className="text-gray-600">
                    Our services are not directed to individuals under 18. We do not knowingly collect
                    personal information from children. If you become aware that a child has provided us
                    with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">International Data Transfers</h3>
                  <p className="text-gray-600">
                    Your information may be transferred to and processed in countries other than your own.
                    We ensure appropriate safeguards are in place to protect your information in accordance
                    with applicable laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Retention</h3>
                  <p className="text-gray-600">
                    We retain personal information for as long as necessary to fulfill the purposes outlined
                    in this policy, unless a longer retention period is required by law. Marketing data is
                    retained until you unsubscribe or request deletion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">California Privacy Rights (CCPA)</h3>
                  <p className="text-gray-600">
                    California residents have additional rights under the CCPA, including the right to know
                    what personal information we collect, the right to delete personal information, and the
                    right to opt-out of the sale of personal information (which we do not do).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">GDPR Compliance</h3>
                  <p className="text-gray-600">
                    For EU residents, we comply with GDPR requirements including lawful basis for processing,
                    data subject rights, and appropriate technical and organizational measures to ensure data security.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Changes to This Policy</h3>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time. We will notify you of any changes by
                    posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Section */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
              <p className="mb-6">
                If you have any questions about this privacy policy or our data practices,
                please don't hesitate to contact us. We're here to help.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Email: privacy@whitebrd.co</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>General: hello@whitebrd.co</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>Address: United States</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-white/90">
                To exercise your privacy rights, please email us with your request. We will respond
                within 30 days as required by applicable law.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}