import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Top Left Orb */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
          top-20
          left-10
          h-80
          w-80
          rounded-full
          bg-indigo-500/20
          blur-[120px]
        "
      />

      {/* Bottom Right Orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/20
          blur-[140px]
        "
      />
    <div
  className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]
  "
  />
    </div>
  );
}