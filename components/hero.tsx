'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#1a1a7a] to-background" />
      
      {/* Animated accent circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{
          y: [0, -25, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary">
            <span className="text-sm font-medium">Welcome to Emina Solutions</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Your Partner in</span>{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Digital Transformation
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Scaling remote operations and delivering premium managed services. From strategic staff augmentation to cutting-edge AI integration, we empower enterprises to thrive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToServices}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
          >
            Explore Our Services
          </Button>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold rounded-lg"
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-primary/60 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
