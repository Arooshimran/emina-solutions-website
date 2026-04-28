'use client';

import { useEffect, useRef } from 'react';
import { useInView, useAnimation, UseInViewOptions } from 'framer-motion';

export function useScrollAnimation(options?: UseInViewOptions) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: false,              // ← changed from true
    margin: '0px 0px -80px 0px',
    ...options,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // ← this is the key addition
    }
  }, [inView, controls]);

  return { ref, controls };
}