import { motion } from "framer-motion";

type InputProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function DraggableImg({ src, alt, className }: InputProps) {
  return (
    <motion.img
      drag
      dragElastic={0.7}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{
        scale: 1.1,
        cursor: "grabbing",
      }}
      animate={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
          bounce: 1,
        },
      }}
      src={src}
      alt={alt}
      className={`cursor-grab ${className || ""}`}
      style={{
        touchAction: "none",
      }}
    />
  );
}
