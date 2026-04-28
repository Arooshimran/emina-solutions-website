// 'use client';

// import { motion } from 'framer-motion';

// export function HeroIntro() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d55]">
      
//       {/* Company name with letter-spacing expansion */}
//       <motion.h1
//         className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white uppercase tracking-tight"
//         initial={{ opacity: 0, letterSpacing: '-0.5em', scaleY: 0.8 }}
//         animate={{ opacity: 1, letterSpacing: '0.1em', scaleY: 1 }}
//         transition={{
//           duration: 2,
//           ease: [0.16, 1, 0.3, 1],   // custom spring-like easing
//           opacity: { duration: 1.2 },
//         }}
//       >
//         Emina
//       </motion.h1>

//       {/* Thin divider line that draws itself */}
//       <motion.div
//         className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: '60%', opacity: 1 }}
//         transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
//       />

//       {/* Tagline fades up after name finishes */}
//       <motion.p
//         className="mt-6 text-lg sm:text-xl text-gray-300 tracking-[0.3em] uppercase font-light"
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
//       >
//         Solutions
//       </motion.p>

//       {/* Optional sub-tagline */}
//       <motion.p
//         className="mt-3 text-sm text-gray-500 tracking-widest uppercase"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 2.4, ease: 'easeOut' }}
//       >
//         Your partner in digital transformation
//       </motion.p>

//     </div>
//   );
// }