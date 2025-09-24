import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, Shield, BarChart, Target, Globe, Info, AlertCircle } from 'lucide-react';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: [
        "Session management",
        "Security tokens",
        "User preferences",
        "Load balancing"
      ],
      canDisable: false
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: [
        "Google Analytics (_ga, _gid)",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ],
      canDisable: true
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: [
        "Language preferences",
        "Region settings",
        "User interface customization",
        "Form data retention"
      ],
      canDisable: true
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      examples: [
        "Google Ads tracking",
        "Facebook Pixel",
        "Retargeting cookies",
        "Campaign performance"
      ],
      canDisable: true
    }
  ];

  const managementMethods = [
    {
      title: "Browser Settings",
      description: "Most browsers allow you to control cookies through their settings",
      steps: [
        "Access your browser's privacy settings",
        "Look for cookie or site data options",
        "Choose your preferred level of cookie acceptance",
        "Clear existing cookies if desired"
      ]
    },
    {
      title: "Cookie Consent Banner",
      description: "Use our cookie consent tool when you first visit our site",
      steps: [
        "Click 'Cookie Settings' on the consent banner",
        "Toggle categories on or off",
        "Save your preferences",
        "Update anytime via the cookie settings link"
      ]
    },
    {
      title: "Third-Party Opt-Out",
      description: "Manage cookies from our partners directly",
      links: [
        { name: "Google Ads Settings", url: "https://adssettings.google.com" },
        { name: "Facebook Ad Preferences", url: "https://www.facebook.com/ads/preferences" },
        { name: "Network Advertising Initiative", url: "https://optout.networkadvertising.org" }
      ]
    }
  ];

  const lastUpdated = "January 23, 2025";
  const effectiveDate = "January 1, 2025";

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy | Whitebrd Co"
        description="Learn about how Whitebrd Co uses cookies to improve your browsing experience, analyze site traffic, and personalize content."
        keywords="cookie policy, cookies, tracking, privacy, browser cookies, GDPR cookies"
        canonicalUrl="https://whitebrd.co/cookie-policy"
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
              <Cookie className="w-3 h-3 mr-1" />
              Transparency First
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Cookie Policy
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cookies to enhance your experience on our website. This policy explains
              what cookies are, how we use them, and how you can manage them.
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

      {/* What Are Cookies */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 bg-white/90 backdrop-blur border-blue-100">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-2">What Are Cookies?</h2>
                <p className="text-gray-700 mb-3">
                  Cookies are small text files placed on your device when you visit a website.
                  They help websites remember information about your visit, making your next visit
                  easier and the site more useful to you.
                </p>
                <p className="text-gray-700">
                  We use both session cookies (which expire when you close your browser) and
                  persistent cookies (which remain until they expire or you delete them).
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-lg text-gray-600">
              We categorize cookies based on their purpose and functionality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                      <type.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{type.title}</h3>
                      {!type.canDisable && (
                        <Badge variant="secondary" className="text-xs mt-1">Required</Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{type.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, exIndex) => (
                        <li key={exIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {type.canDisable && (
                    <p className="text-sm text-gray-500 mt-4 pt-4 border-t">
                      You can disable these cookies in your preferences
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Manage Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Manage Cookies</h2>
            <p className="text-lg text-gray-600">
              You have several options for managing cookies on our website
            </p>
          </motion.div>

          <div className="space-y-6">
            {managementMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>

                  {method.steps && (
                    <ol className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start text-gray-600">
                          <span className="font-semibold text-blue-600 mr-2">{stepIndex + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}

                  {method.links && (
                    <div className="space-y-2">
                      {method.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Impact of Disabling Cookies</h3>
                <p className="text-gray-600">
                  Disabling certain cookies may impact your experience on our website. Some features
                  may not work properly, and you may need to adjust settings each time you visit.
                  Essential cookies cannot be disabled as they are necessary for the website to function.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Cookies</h3>
                <p className="text-gray-600">
                  Some cookies are placed by third-party services that appear on our pages.
                  We do not control these cookies and encourage you to check the third-party
                  websites for more information about how they use cookies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Updates to This Policy</h3>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our
                  practices or for legal reasons. We will notify you of any significant changes
                  by posting a notice on our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do Not Track Signals</h3>
                <p className="text-gray-600">
                  Some browsers offer a "Do Not Track" (DNT) option. Our website does not currently
                  respond to DNT signals, but you can manage your cookie preferences using the
                  methods described above.
                </p>
              </div>
            </div>
          </Card>

          {/* Browser-Specific Instructions */}
          <Card className="mt-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browser-Specific Cookie Settings</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" },
                { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
              ].map((browser, index) => (
                <a
                  key={index}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{browser.name}</span>
                  <span className="text-blue-600">View Instructions →</span>
                </a>
              ))}
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="mb-6">
              If you have questions about our use of cookies or this policy, we're here to help.
            </p>

            <div className="space-y-3">
              <p>
                <strong>Email:</strong> privacy@whitebrd.co
              </p>
              <p>
                <strong>General Inquiries:</strong> hello@whitebrd.co
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  For more information about our privacy practices, please visit our{' '}
                  <a href="/privacy-policy" className="underline hover:no-underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}