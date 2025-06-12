import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import jamieImage from '@assets/image_1749697502488.png';
import jakobEmilyImage from '@assets/Emily and Jakob Gallery_1749697525226.jpg';

export function WorkSection() {
  const { ref: beliefsRef, isVisible: beliefsVisible } = useScrollAnimation();
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation();

  const beliefs = [
    "Blank is beautiful.",
    "Strategy beats noise.",
    "Less is more.",
    "The best work is personal."
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* What We Believe Section */}
        <motion.div
          ref={beliefsRef}
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={beliefsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-black">
            What We Believe
          </h2>
          <div className="space-y-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                className="text-2xl sm:text-3xl font-bold text-black"
                initial={{ opacity: 0, x: -20 }}
                animate={beliefsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {belief}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* From the Founder Section */}
        <motion.div
          ref={founderRef}
          initial={{ opacity: 0, y: 30 }}
          animate={founderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-black">
            From the Founders
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Jamie */}
            <div className="space-y-8">
              <div>
                <img 
                  src={jamieImage} 
                  alt="Jamie Thayne" 
                  className="w-48 h-48 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-black">Jamie Thayne</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
              
              <blockquote className="text-lg sm:text-xl leading-relaxed text-black">
                "Whitebrd Co. was created for businesses tired of templated marketing. We believe great digital work doesn't start with a formula — it starts with a conversation. You bring the vision — we bring the creative firepower to make it real."
              </blockquote>
            </div>

            {/* Right side - Jakob */}
            <div className="space-y-8">
              <div>
                <img 
                  src={jakobEmilyImage} 
                  alt="Jakob Thompson" 
                  className="w-48 h-48 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-black">Jakob Thompson</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}