'use client';

import { motion } from 'framer-motion';
import { Chakra_Petch } from 'next/font/google';
import { useScrollAnimation } from '@/hooks/scroll-animation';
import { fadeUp, staggerContainer } from '@/lib/animation-variants';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-chakra',
});

const divisions = [
  {
    label: 'Operations',
    color: '#c8c8e8',
    desc: 'Executive Virtual Assistance & LinkedIn Management Services',
    icon: '⚙',
  },
  {
    label: 'Creative',
    color: '#F9A8C9',
    desc: 'Content Creation, Podcast Production & Video Marketing',
    icon: '✦',
  },
  {
    label: 'Technical',
    color: '#D9F103',
    desc: 'SaaS Development, AI Integration & Custom Software Engineering',
    icon: '◈',
  },
];

const stats = [
  { value: '8+', label: 'Professional Services Offered' },
  { value: '3', label: 'Core Business Divisions' },
  { value: '24hr', label: 'Average Response Time' },
  { value: '100%', label: 'Remote-First Scalable Operations' },
];

export function AboutSection() {
  const headerAnim = useScrollAnimation();
  const leftAnim = useScrollAnimation();
  const rightAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();

  return (
    <section
      id="about"
      className={`${chakra.variable} relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      aria-label="About Emina Solutions BPO and Digital Transformation Agency"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D9F103]/5 blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F9A8C9]/5 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          ref={headerAnim.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={headerAnim.controls}
          className="text-center mb-16"
        >
          {/* SEO H2 (kept same visual style) */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white text-balance"
            style={{
              fontFamily: 'var(--font-chakra), sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            About <span style={{ color: '#D9F103' }}>Emina Solutions</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-16 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto mb-6"
          />

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A next-generation Business Process Outsourcing (BPO) and digital transformation agency
            built for modern businesses that scale fast through technology, automation, and remote operations.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left */}
          <motion.div
            ref={leftAnim.ref}
            variants={staggerContainer}
            initial="hidden"
            animate={leftAnim.controls}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed">
              <span
                style={{
                  color: '#F9A8C9',
                  fontFamily: 'var(--font-chakra)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                Emina Solutions
              </span>{' '}
              is a comprehensive BPO, software development, and digital transformation company focused on scaling
              remote operations and delivering high-performance managed services for startups and enterprises.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              We bridge the gap between back-office administrative support, business process outsourcing (BPO),
              and high-end digital product development including UI/UX design, content production, and automation systems.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              On the technical side, we specialize in end-to-end product engineering, SaaS development, and custom software solutions.
              We build scalable web applications and modern platforms while modernizing legacy systems through AI integration
              using Hugging Face and Replicate APIs.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="w-full h-px bg-linear-to-r from-[#D9F103]/30 via-[#F9A8C9]/30 to-transparent"
            />

            <motion.p variants={fadeUp} className="text-gray-300 font-medium">
              We empower founders, startups, and marketing teams to focus on growth and strategy — while we handle
              operations, engineering, and digital execution end-to-end.
            </motion.p>
          </motion.div>

          {/* Right */}
          <motion.div
            ref={rightAnim.ref}
            initial="hidden"
            animate={rightAnim.controls}
            variants={staggerContainer}
            className="space-y-4"
          >
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-center gap-5 p-5 rounded-xl border transition-all duration-300 cursor-default"
                style={{
                  borderColor: `${div.color}30`,
                  background: `linear-gradient(135deg, ${div.color}08 0%, transparent 100%)`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${div.color}20`, border: `1px solid ${div.color}40` }}
                >
                  <span style={{ color: div.color }}>{div.icon}</span>
                </div>

                <div className="flex-1">
                  <h4
                    className="text-lg font-bold mb-0.5"
                    style={{
                      fontFamily: 'var(--font-chakra), sans-serif',
                      fontStyle: 'italic',
                      color: div.color,
                    }}
                  >
                    {div.label}
                  </h4>
                  <p className="text-gray-400 text-sm">{div.desc}</p>
                </div>

                <motion.div
                  className="w-1 h-10 rounded-full shrink-0"
                  style={{ background: div.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsAnim.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={statsAnim.controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-chakra), sans-serif',
                  fontStyle: 'italic',
                  color: i % 2 === 0 ? '#D9F103' : '#F9A8C9',
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}