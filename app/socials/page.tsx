'use client';

import { motion } from 'framer-motion';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-chakra',
});

const socials = [
  {
    platform: 'LinkedIn',
    handle: '@EminaSolutions',
    href: 'https://www.linkedin.com/company/emina-solutions/',
    desc: 'Thought leadership, case studies & B2B insights from our team.',
    color: '#c8c8e8',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    tag: 'B2B',
  },
  {
    platform: 'Instagram',
    handle: '@emina.solutions',
    href: 'https://www.instagram.com/eminasolutions?igsh=MWFlemphbGNsNHdyaw%3D%3D&utm_source=qr',
    desc: 'Behind-the-scenes, client spotlights & creative process content.',
    color: '#D9F103',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    tag: 'Visual',
  },
  {
    platform: 'Whatsapp',
    handle: '@emina.solutions',
    href: 'https://wa.me/923297538357?text=Hi%20Emina%20Solutions%2C%20I%20want%20to%20inquire',
    desc: 'Instant replies for service inquiries, quotes, and project discussions.',
    color: '#D9F103',
    icon: (
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
        <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
        <path d="M16.02 3C9.38 3 4 8.37 4 15c0 2.1.55 4.08 1.52 5.82L4 29l8.37-1.5A12.9 12.9 0 0016.02 27C22.66 27 28 21.63 28 15S22.66 3 16.02 3zm0 23.2c-1.8 0-3.5-.48-4.98-1.3l-.36-.2-4.97.89.91-4.85-.23-.38A9.18 9.18 0 016.8 15c0-5.1 4.13-9.2 9.22-9.2 5.1 0 9.22 4.1 9.22 9.2s-4.12 9.2-9.22 9.2z"/>
      </svg>
    ),
    tag: 'Direct Chat',
  },
  {
    platform: 'Email',
    handle: 'solutionsemina@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=queries.eminasolutions@gmail.com',
        desc: 'For business proposals, partnerships, and formal communication.',
    color: '#c8c8e8',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    tag: 'Business',
  },

];
const marqueeItems = [
  'FOLLOW US', '✦', 'STAY CONNECTED', '⚙', 'JOIN THE COMMUNITY', '◈',
  'FOLLOW US', '✦', 'STAY CONNECTED', '⚙', 'JOIN THE COMMUNITY', '◈',
  'FOLLOW US', '✦', 'STAY CONNECTED', '⚙', 'JOIN THE COMMUNITY', '◈',
];

export default function SocialsPage() {
  return (
    <main
      className={`${chakra.variable} min-h-screen relative`}
      style={{ background: '#0d0d55' }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(217,241,3,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              background: 'rgba(249,168,201,0.1)',
              border: '1px solid rgba(249,168,201,0.25)',
              color: '#F9A8C9',
              fontFamily: 'var(--font-chakra)',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: '#D9F103' }}>✦</span>
                WHERE TO FIND US           
                </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-5 text-white"
            style={{
              fontFamily: 'var(--font-chakra), sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Our{' '}
            <span style={{ color: '#F9A8C9' }}>Socials</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
  Follow Emina Solutions for insights on business process outsourcing (BPO), SaaS development,
  AI automation, CRM systems, GoHighLevel workflows, and digital transformation services.
  See how we help businesses scale with remote teams and modern technology.
</p>
        </motion.div>

        {/* Marquee */}
        <div
          className="relative mb-14 py-3 overflow-hidden"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeItems.map((item, i) => (
              <span
                key={i}
                className="text-xs font-bold tracking-widest"
                style={{
                  fontFamily: 'var(--font-chakra)',
                  color: item.startsWith('✦') || item.startsWith('⚙') || item.startsWith('◈')
                    ? '#D9F103'
                    : 'rgba(255,255,255,0.25)',
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Social cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-6 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.08)`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${s.color}12 0%, transparent 60%)`,
                  border: `1px solid ${s.color}25`,
                }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: s.color + '18',
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>

                {/* Tag + arrow */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      fontFamily: 'var(--font-chakra)',
                      background: s.color + '15',
                      color: s.color,
                      border: `1px solid ${s.color}25`,
                    }}
                  >
                    {s.tag}
                  </span>
                  <span
                    className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: s.color }}
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3
                  className="text-base font-bold mb-0.5 group-hover:transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-chakra)',
                    fontStyle: 'italic',
                    color: '#e0e0f0',
                  }}
                >
                  {s.platform}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: s.color + 'cc' }}
                >
                  {s.handle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>

              {/* Footer */}
              <div
                className="relative z-10 flex items-center justify-between mt-5 pt-4"
                style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ fontFamily: 'var(--font-chakra)', color: s.color }}
                >
                  Follow →
                </span>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p
            className="text-gray-500 text-sm mb-4"
            style={{ fontFamily: 'var(--font-chakra)' }}
          >
            Tag us in your work ✦ We love to share client wins
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['#EminaSolutions', '#ScaleRemote', '#AIIntegration', '#BPO'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#606070',
                  fontFamily: 'var(--font-chakra)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}