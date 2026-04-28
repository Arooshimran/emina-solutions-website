'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chakra_Petch } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/scroll-animation';
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animation-variants';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-chakra',
});

const infoItems = [
  { label: 'Fast Response', desc: 'Within 24 hours' },
  { label: 'Expert Team', desc: 'Dedicated support' },
  { label: 'Results Driven', desc: 'Proven track record' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const headerAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/xeevyovg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`${chakra.variable} relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8`}
    >
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerAnim.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={headerAnim.controls}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl mb-6 text-white text-balance"
            style={{
              fontFamily: 'var(--font-chakra), sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Let&apos;s Work{' '}
            <span style={{ color: '#F9A8C9' }}>Together</span>
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="w-16 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto mb-6"
          />

          <motion.p variants={fadeUp} className="text-lg text-gray-300">
            Ready to scale your operations? Get in touch with our team.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formAnim.ref}
          variants={fadeUp}
          initial="hidden"
          animate={formAnim.controls}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-primary text-sm font-medium"
            >
              ✓ Message sent successfully!
            </motion.div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="bg-background border-border text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="bg-background border-border text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white resize-none"
            />
          </div>

          {/* Button */}
          <Button
  type="submit"
  disabled={loading}
  className="w-full bg-linear-to-r from-[#0d0d55] to-[#4f7cff] text-white font-semibold py-6 shadow-sm hover:shadow-md hover:shadow-blue-500/20 focus-visible:ring-0 transition-all duration-300"
>
  {loading ? 'Sending...' : 'Send Message'}
</Button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. No spam.
          </p>
        </motion.form>

        {/* Info */}
        <motion.div
          ref={infoAnim.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={infoAnim.controls}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {infoItems.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <h4 className="text-white font-semibold">{item.label}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}