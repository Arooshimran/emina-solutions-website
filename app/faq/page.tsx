'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-chakra',
});

const faqs = [
  {
    category: 'Operations',
    color: '#c8c8e8',
    icon: '⚙',
    items: [
      {
        q: 'What does an Executive VA actually do for me?',
        a: 'Your Executive VA handles calendar management, inbox triage, meeting prep, travel bookings, and day-to-day correspondence — acting as your remote operations partner and saving 10–20 hours per week.',
      },
      {
        q: 'How does LinkedIn Management work?',
        a: 'We handle LinkedIn growth, profile optimization, outreach, content scheduling, and engagement. Our team builds your network and generates qualified B2B leads.',
      },
      {
        q: "What's the typical onboarding process?",
        a: 'Onboarding takes 3–5 business days. We start with a discovery call, define workflows, set up systems, and assign your dedicated team with full communication access.',
      },
    ],
  },
  {
    category: 'Creative',
    color: '#F9A8C9',
    icon: '✦',
    items: [
      {
        q: 'What content formats do you produce?',
        a: 'We create social media content, brand design, video editing, marketing creatives, and platform-optimized digital assets.',
      },
      {
        q: 'Do you handle distribution and scheduling?',
        a: 'Yes, we manage posting schedules, captions, hashtags, publishing, and performance tracking across platforms.',
      },
      {
        q: 'Do you offer content writing services?',
        a: 'Yes, we provide SEO content writing, blogs, website copywriting, and marketing copy optimized for search engines and conversions.',
      },
    ],
  },
  {
    category: 'Technical',
    color: '#D9F103',
    icon: '◈',
    items: [
      {
        q: 'What tech stack do you use?',
        a: 'We use Next.js, React, Node.js, and Python, along with AI APIs like Hugging Face and Replicate for intelligent automation.',
      },
      {
        q: 'Can you integrate AI into my existing system?',
        a: 'Yes, we integrate AI for automation, analytics, content generation, and business optimization without disrupting your current systems.',
      },
      {
        q: 'Do you offer CRM and GoHighLevel automation?',
        a: 'Yes, we provide CRM setup, funnel automation, pipeline tracking, and full GoHighLevel (GHL) system implementation.',
      },
    ],
  },
  {
    category: 'General',
    color: '#ffffff',
    icon: '◎',
    items: [
      {
        q: 'What time zones do you operate in?',
        a: 'We operate globally across EST, PST, GMT, and GST with 24-hour coverage and fast response times.',
      },
      {
        q: 'How do I get started?',
        a: 'Simply contact us and we’ll schedule a discovery call to build a custom solution based on your business needs.',
      },
    ],
  },
];

function AccordionItem({
  q,
  a,
  accentColor,
  index,
}: {
  q: string;
  a: string;
  accentColor: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${open ? accentColor + '40' : 'rgba(255,255,255,0.08)'}`,
        background: open
          ? `linear-gradient(135deg, ${accentColor}08 0%, rgba(10,10,14,0.95) 100%)`
          : '#c8c8e8',
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="text-sm sm:text-base font-bold leading-snug"
          style={{
            fontFamily: 'var(--font-chakra), sans-serif',
            color: open ? accentColor : '#0a0a0e',
            transition: 'color 0.3s',
          }}
        >
          {q}
        </span>

        {/* FULL ANIMATION RESTORED */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold"
          style={{
            background: open ? accentColor + '20' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${open ? accentColor + '50' : 'rgba(255,255,255,0.1)'}`,
            color: open ? accentColor : '#606070',
            fontWeight: 900,
          }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: '#8888a8' }}
            >
              <div
                className="w-full h-px mb-4"
                style={{ background: `linear-gradient(90deg, ${accentColor}30, transparent)` }}
              />
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? faqs.filter((f) => f.category === activeCategory)
    : faqs;

  return (
    <main className={`${chakra.variable} min-h-screen relative`} style={{ background: '#0d0d55' }}>

      {/* SEO ONLY - no visual impact */}
      <h1 className="sr-only">
        Emina Solutions FAQ - BPO Services, SaaS Development, AI Integration, CRM Automation, Content Writing & Digital Transformation Agency
      </h1>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Header (unchanged UI) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{
              background: 'rgba(217,241,3,0.1)',
              border: '1px solid rgba(217,241,3,0.25)',
              color: '#D9F103',
              fontFamily: 'var(--font-chakra)',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: '#F9A8C9' }}>◎</span>
            FREQUENTLY ASKED
          </div>

          <h2
            className="text-5xl sm:text-6xl lg:text-7xl mb-5 text-white"
            style={{
              fontFamily: 'var(--font-chakra), sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Got <span style={{ color: '#D9F103' }}>Questions</span>?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Everything you need to know about our BPO services, SaaS development, AI integration,
            CRM automation, content writing, and digital transformation solutions.
          </p>
        </motion.div>

        {/* (rest of your UI unchanged) */}

        {/* Category filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {[{ category: 'All', color: '#ffffff', icon: '◈' }, ...faqs].map(({ category, color, icon }) => {
            const isActive = category === 'All' ? activeCategory === null : activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category === 'All' ? null : category)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-chakra)',
                  background: isActive ? color + '18' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? color + '50' : 'rgba(255,255,255,0.1)'}`,
                  color: isActive ? color : '#606070',
                }}
              >
                <span>{icon}</span>
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Accordion groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory ?? 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {displayed.map((group) => (
              <div key={group.category}>
                {/* Group label */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: group.color + '18', color: group.color }}
                  >
                    {group.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-chakra)', color: group.color }}
                  >
                    {group.category}
                  </span>
                  <div className="flex-1 h-px" style={{ background: group.color + '20' }} />
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      q={item.q}
                      a={item.a}
                      accentColor={group.color}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 text-center p-10 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(217,241,3,0.07) 0%, rgba(249,168,201,0.07) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p
            className="text-2xl sm:text-3xl font-bold italic mb-3 text-white"
            style={{ fontFamily: 'var(--font-chakra)' }}
          >
            Still have questions?
          </p>
          <p className="text-gray-400 mb-6 text-sm">
            We reply within 24 hours — usually much faster.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm"
            style={{
              fontFamily: 'var(--font-chakra)',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #D9F103, #b8d600)',
              color: '#0a0a0e',
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
}