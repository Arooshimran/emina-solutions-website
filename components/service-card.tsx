'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/services-data';
import { useScrollAnimation } from '@/hooks/scroll-animation';
import { fadeUp } from '@/lib/animation-variants';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (Icons as any)[service.icon];
  const { ref, controls } = useScrollAnimation({ margin: '0px 0px -60px 0px' });
  const hoverImageUrl = "/bpo-team.jfif";

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      transition={{ delay: index * 0.1 }}
      className="h-full relative overflow-hidden rounded-xl"
      style={{
        border: '1px solid rgba(147, 130, 255, 0.55)',
        boxShadow: '0 0 8px 2px rgba(147,130,255,0.35), 0 0 24px 4px rgba(147,130,255,0.15)',
        borderRadius: '0.75rem',
      }}
    >
      <div className="group h-full p-6 bg-[#D2C7FF] hover:bg-transparent transition-colors duration-700 ease-out rounded-xl relative overflow-hidden">

        {/* Background Image Layer — loads first, fades in */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0 rounded-xl overflow-hidden">
          <img
            src={hoverImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D55]/70" />
        </div>

        {/* Hover yellow tint — only shows AFTER image is present */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 bg-[#D9F103]/10 pointer-events-none z-1 rounded-xl" />

        {/* Content Layer */}
        <div className="relative z-10 space-y-4">
          <div className="inline-flex p-3 rounded-lg bg-[#0D0D55]/10 group-hover:bg-white/10 transition-colors duration-500 ease-out">
            {Icon && <Icon className="w-6 h-6 text-[#0D0D55] group-hover:text-white transition-colors duration-500" />}
          </div>

          <h3 className="text-xl font-bold text-[#0D0D55] group-hover:text-white transition-colors duration-500 ease-out">
            {service.title}
          </h3>

          <p className="text-[#0D0D55]/70 text-sm group-hover:text-white/80 transition-colors duration-500 ease-out line-clamp-2">
            {service.description}
          </p>

          <div className="w-8 h-1 bg-[#0D0D55]/50 group-hover:bg-white/50 rounded-full transition-colors duration-500 ease-out" />

          <ul className="space-y-2">
            {service.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#0D0D55]/80 group-hover:text-white transition-colors duration-500 ease-out">
                <span className="text-[#0D0D55] group-hover:text-white font-bold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}