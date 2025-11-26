import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Feature {
  imageUrl: string;
  title: string;
  description: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1516850228053-a807778c4e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjByb2NrZXQlMjBzcGVlZHxlbnwxfHx8fDE3NjMzMDY5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Fast Job Posting',
    description: 'Create a job in under a minute with clear details and budget.',
    bgColor: 'bg-[#E3F2FD]'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1642364706738-1334b13c66a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjBjaGVja21hcmslMjB2ZXJpZmllZHxlbnwxfHx8fDE3NjMzMDY5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Verified Workers',
    description: 'Choose from profiles with skill tags and ratings you can trust.',
    bgColor: 'bg-[#E3F2FD]'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjBsb2NrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYzMzA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Secure Payments',
    description: 'All payments are protected and transparent throughout the process.',
    bgColor: 'bg-[#E3F2FD]'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1642364706738-1334b13c66a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjBzZWFyY2glMjBtYWduaWZ5aW5nfGVufDF8fHx8MTc2MzMwNjk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Find Jobs Instantly',
    description: 'Browse jobs matched to your skills and availability.',
    bgColor: 'bg-[#E3F2FD]'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1622191020772-48880b6f1468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjBtb25leSUyMGRvbGxhcnxlbnwxfHx8fDE3NjMzMDY5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Set Your Own Rates',
    description: 'Full flexibility to price your services and negotiate terms.',
    bgColor: 'bg-[#E3F2FD]'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1658842244540-883aff68fb78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGljb24lMjBjcmVkaXQlMjBjYXJkfGVufDF8fHx8MTc2MzMwNjk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Guaranteed Payments',
    description: 'Get paid immediately after completing your work.',
    bgColor: 'bg-[#E3F2FD]'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-900 mb-4"
          >
            Why Choose Zoopol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto px-4"
            style={{ fontSize: '18px' }}
          >
            Built for Job Posters and Workers to connect effortlessly.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${feature.bgColor} rounded-3xl p-6 md:p-8 h-full transition-transform duration-300 hover:scale-105`}>
                <div className="mb-4 md:mb-6">
                  <ImageWithFallback 
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto"
                  />
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base" style={{ fontSize: '16px' }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="bg-[#156BFC]/25 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-900 mb-4">
                We Help Your Work Get Done
              </h3>
              <p className="text-gray-600" style={{ fontSize: '18px' }}>
                From short tasks to day-long jobs, thousands of businesses and households trust Zoopol to hire dependable workers instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}