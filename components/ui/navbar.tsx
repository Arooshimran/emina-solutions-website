'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-chakra',
});

const navLinks = [
  { label: 'About',    href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Socials',  href: '/socials' },
  { label: 'Contact',  href: '/#contact' },
];

export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeLink,   setActiveLink]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <motion.header
      className={`${chakra.variable} relative z-50 transition-all duration-500`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glass bar */}
      <div
        className="relative mx-3 mt-3 rounded-2xl transition-all duration-500"
        style={{
          background: scrolled
  ? 'rgba(13, 13, 85, 0.95)'
  : 'rgba(13, 13, 85, 0.75)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: scrolled
            ? '1px solid rgba(217, 241, 3, 0.18)'
            : '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(217,241,3,0.06)'
            : 'none',
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(217,241,3,0.5) 40%, rgba(249,168,201,0.5) 60%, transparent)',
          }}
        />

        <div className="flex items-center justify-between px-5 py-3.5">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group select-none"
          >
            {/* Logo mark */}
            <span
              style={{
                fontFamily: 'var(--font-chakra), sans-serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#fff',
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ color: '#D9F103' }}> Home</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isSpecial = link.label === 'FAQ' || link.label === 'Socials';
              const isContact = link.label === 'Contact';
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
                  style={{
                    fontFamily: 'var(--font-chakra), sans-serif',
                    color: isContact
                      ? '#0a0a0e'
                      : activeLink === link.label
                      ? '#D9F103'
                      : '#a0a0b0',
                    background: isContact
                      ? 'linear-gradient(135deg, #D9F103, #b8d600)'
                      : 'transparent',
                    fontWeight: isContact ? 700 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isContact)
                      (e.currentTarget as HTMLAnchorElement).style.color = isSpecial
                        ? '#F9A8C9'
                        : '#D9F103';
                  }}
                  onMouseLeave={(e) => {
                    if (!isContact)
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        activeLink === link.label ? '#D9F103' : '#a0a0b0';
                  }}
                >
                  {isSpecial && (
                    <span
                      className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full"
                      style={{ background: '#F9A8C9' }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px rounded-full"
                style={{ background: '#D9F103', width: i === 1 ? '20px' : '14px' }}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 6, width: '20px' }
                      : i === 2
                      ? { rotate: -45, y: -6, width: '20px' }
                      : { opacity: 0 }
                    : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? '20px' : '14px' }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div
                className="px-4 pb-4 pt-1 flex flex-col gap-1"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {navLinks.map((link, i) => {
                  const isContact = link.label === 'Contact';
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-sm font-medium"
                      style={{
                        fontFamily: 'var(--font-chakra), sans-serif',
                        color: isContact ? '#0a0a0e' : '#c0c0d0',
                        background: isContact
                          ? 'linear-gradient(135deg, #D9F103, #b8d600)'
                          : 'rgba(255,255,255,0.04)',
                        fontWeight: isContact ? 700 : 400,
                      }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}