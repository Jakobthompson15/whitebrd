import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function WorkSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const caseStudies = [
    {
      company: "ABC Heating & Air",
      location: "Dallas, TX",
      service: "HVAC Contractor",
      challenge: "Struggling to compete with larger companies for emergency service calls",
      results: [
        { label: "Monthly Leads", value: "+485%" },
        { label: "Emergency Calls", value: "+320%" },
        { label: "Monthly Revenue", value: "+$89K" }
      ],
      testimonial: "Within 90 days, we went from 12 leads per month to over 70. The quality is incredible."
    },
    {
      company: "Premier Plumbing Co.",
      location: "Phoenix, AZ", 
      service: "Plumbing Services",
      challenge: "Low online visibility for high-value plumbing installations",
      results: [
        { label: "Local Rankings", value: "#1-3 Position" },
        { label: "Installation Leads", value: "+290%" },
        { label: "Average Job Value", value: "+65%" }
      ],
      testimonial: "Our phone doesn't stop ringing. We've hired 3 new technicians this year alone."
    },
    {
      company: "Comfort Pro HVAC",
      location: "Miami, FL",
      service: "HVAC & Electrical",
      challenge: "Seasonal fluctuations affecting consistent lead generation",
      results: [
        { label: "Year-Round Leads", value: "+420%" },
        { label: "Maintenance Contracts", value: "+380%" },
        { label: "Customer Retention", value: "+95%" }
      ],
      testimonial: "We now have steady work year-round. No more slow seasons worrying about payroll."
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-4 block">
            Proven Results
          </span>
          <h2 className="font-lato-bold text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real HVAC and plumbing contractors who transformed their business with our digital marketing
          </p>
        </motion.div>
        
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.company}
              className="bg-gray-50 p-8 border-2 border-black hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="font-lato-bold text-2xl mb-2">{study.company}</h3>
                <p className="text-gray-600 text-sm font-medium">{study.service} • {study.location}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-600 mb-2">Challenge</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-600 mb-3">Results</h4>
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{result.label}</span>
                      <span className="font-bold text-black">{result.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm italic text-gray-700">"{study.testimonial}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={cardsVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border-2 border-black mr-4">
            See More Case Studies
          </button>
          <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 border-2 border-black">
            Get Similar Results
          </button>
        </motion.div>
      </div>
    </section>
  );
}
