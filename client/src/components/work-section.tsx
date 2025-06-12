import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function WorkSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Project Alpha",
      subtitle: "E-commerce Brand Transformation",
      metrics: [
        { label: "Traffic Increase", value: "+340%" },
        { label: "Conversion Rate", value: "+180%" },
        { label: "ROI", value: "+250%" }
      ]
    },
    {
      title: "Project Beta",
      subtitle: "SaaS Lead Generation",
      metrics: [
        { label: "Lead Quality", value: "+420%" },
        { label: "Cost Per Lead", value: "-65%" },
        { label: "Monthly Revenue", value: "+300%" }
      ]
    },
    {
      title: "Project Gamma",
      subtitle: "Local Business Domination",
      metrics: [
        { label: "Local Rankings", value: "#1-3 Position" },
        { label: "Store Visits", value: "+280%" },
        { label: "Online Reviews", value: "+500%" }
      ]
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="font-lato-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Work
        </motion.h2>
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <h3 className="font-lato-bold text-2xl mb-3 tracking-wide">{project.title}</h3>
              <p className="text-sm mb-4 opacity-80">{project.subtitle}</p>
              <div className="space-y-2 text-sm">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between">
                    <span>{metric.label}:</span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
