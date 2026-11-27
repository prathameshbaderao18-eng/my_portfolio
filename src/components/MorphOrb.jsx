import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MorphOrb() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 45, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 45, damping: 18 });
  const rotate = useTransform(smoothX, [-180, 180], [-14, 14]);

  function move(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }
  function reset() { x.set(0); y.set(0); }

  return (
    <div className="orb-stage" onMouseMove={move} onMouseLeave={reset} aria-hidden="true">
      <motion.div className="orb-halo" style={{ x: smoothX, y: smoothY }} />
      <motion.div className="morph-orb" style={{ x: smoothX, y: smoothY, rotate }}>
        <div className="orb-shine" />
        <div className="orb-core" />
        <span className="orb-cross cross-one" />
        <span className="orb-cross cross-two" />
      </motion.div>
      <div className="orb-caption"><span className="live-dot" /> CREATIVE ENERGY / 001</div>
    </div>
  );
}
