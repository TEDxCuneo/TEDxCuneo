import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

type InputProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function DraggableImg({
  src,
  alt,
  className,
  style,
}: InputProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const controls = useAnimationControls();

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
      animate={controls}
      onDragStart={() => {
        setIsDragging(true);
        controls.start({
          scale: 1.1,
          zIndex: 100,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            bounce: 1,
          },
        });
      }}
      onDragEnd={() => {
        setIsDragging(false);
        setIsReturning(true);

        // Animation with minimal bounces
        controls.start({
          scale: 1.1,
          zIndex: 100,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300, // Higher stiffness for fewer oscillations
            damping: 15, // Higher damping to reduce number of bounces
            bounce: 0.5, // Lower bounce factor
            duration: 0.5, // Shorter duration
          },
        });

        // Reset z-index after animation completes
        setTimeout(() => {
          setIsReturning(false);
          controls.start({
            scale: 1.1,
            zIndex: "auto",
            transition: { duration: 0 },
          });
        }, 700); // Adjusted timeout
      }}
      src={src}
      alt={alt}
      className={`cursor-grab ${className || ""}`}
      style={{
        touchAction: "none",
        zIndex: isDragging || isReturning ? 100 : "auto",
        ...style,
      }}
      transformTemplate={(_, generatedTransform) => {
        // Extract any transform from the inline style or className
        const existingTransform = style?.transform || "";
        return existingTransform
          ? `${generatedTransform} ${existingTransform}`
          : generatedTransform;
      }}
    />
  );
}
