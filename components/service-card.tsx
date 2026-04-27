'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/services-data';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (Icons as any)[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <div className="group h-full p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
        {/* Icon */}
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Divider */}
        <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4 group-hover:w-12 transition-all duration-300" />

        {/* Service Items */}
        <ul className="space-y-2">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-accent font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
