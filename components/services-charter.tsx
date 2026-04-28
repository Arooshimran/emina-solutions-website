'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from './service-card';
import { serviceCategories } from '@/lib/services-data';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-chakra',
});

export function ServicesCharter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const allServices = serviceCategories.flatMap(cat => cat.services);

  return (
    <section
      id="services"
      className={`${chakra.variable} relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8`}
      aria-label="Emina Solutions Services - BPO, Software Development, SaaS, AI & Digital Transformation"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1a1a7a]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white text-balance"
            style={{
              fontFamily: 'var(--font-chakra), sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Our <span style={{ color: '#D9F103' }}>Services</span>
          </h2>

          <div className="w-16 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto mb-6" />

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end business process outsourcing (BPO), software development, SaaS engineering, AI integration,
            content writing, and digital transformation services designed to scale modern businesses efficiently.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {allServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Need a custom solution? We provide tailored BPO, SaaS, AI, and content services for your business needs.
          </p>

          <div className="inline-flex items-center gap-2 text-primary font-semibold cursor-pointer hover:gap-3 transition-all">
            Contact our team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}