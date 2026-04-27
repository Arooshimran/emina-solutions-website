'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state. Connect to backend later
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background accents */}
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-balance">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-300">
            Ready to scale your operations? Get in touch with our team to discuss your needs.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-primary text-sm font-medium"
            >
              ✓ Thank you for reaching out! We&apos;ll be in touch soon.
            </motion.div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-background border-border text-white placeholder:text-gray-500 focus:border-primary transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-background border-border text-white placeholder:text-gray-500 focus:border-primary transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tell us about your project
            </label>
            <textarea
              name="message"
              placeholder="Describe your business needs and goals..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 font-semibold py-6 text-base transition-all duration-300"
          >
            Send Message
          </Button>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </motion.form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {[
            { icon: '⚡', label: 'Fast Response', desc: 'Within 24 hours' },
            { icon: '🎯', label: 'Expert Team', desc: 'Dedicated support' },
            { icon: '🚀', label: 'Results Driven', desc: 'Proven track record' },
          ].map((item, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-white mb-1">{item.label}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
