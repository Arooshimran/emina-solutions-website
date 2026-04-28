import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.4, ease: 'easeIn' },   // faster fade OUT
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },   // slower fade IN
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};