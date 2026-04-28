'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d55]">

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* LOGO */}
        <motion.img
          src="/emina_logo_cropped.png"
          alt="Emina Solutions - Web Development, Software Development, E-commerce & Digital Transformation Company"
          style={{ width: 'clamp(220px, 40vw, 420px)', height: 'auto' }}
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* SEO H1 (NO visual change, same style) */}
        <motion.h1
          className="mt-0 text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
        >
          Emina Solutions – Web Development, E-Commerce, Software & Digital Transformation Services
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="h-px bg-linear-to-r from-transparent via-primary to-transparent mt-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          style={{ width: '80%', transformOrigin: 'center' }}
          transition={{ duration: 1.0, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Sub-tagline (SEO enhanced but same visual style) */}
        <motion.p
          className="mt-3 text-sm sm:text-base text-gray-400 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.6, ease: 'easeOut' }}
        >
Web Development • E-Commerce Development • SaaS Product Engineering • AI Integration • BPO & Remote Operations • Digital Transformation Services        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button onClick={scrollToServices} size="lg">Explore Our Services</Button>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" size="lg"
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.0 }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-primary/60 text-xs font-medium tracking-[0.2em] uppercase"
          >
            Scroll to explore
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}