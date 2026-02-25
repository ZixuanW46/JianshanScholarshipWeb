import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1764032759724-22608ed91af8?w=400&h=500&fit=crop", // Student Portrait
  "https://images.unsplash.com/photo-1764032760214-bbf340016105?w=400&h=500&fit=crop", // Scholar Portrait
  "https://images.unsplash.com/photo-1765338915293-12cbbb7140d5?w=400&h=500&fit=crop", // Adventure
  "https://images.unsplash.com/photo-1758270705657-f28eec1a5694?w=400&h=500&fit=crop", // Group
  "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=400&h=500&fit=crop", // Teaching
];

interface ImageTrailProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function ImageTrail({ containerRef }: ImageTrailProps) {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number; imgIndex: number }[]>([]);
  const timerRef = useRef<number>();
  const lastPosRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Get container position to calculate relative coordinates
      const rect = container.getBoundingClientRect();
      
      // Check if mouse is within container bounds
      if (
        e.clientX < rect.left || 
        e.clientX > rect.right || 
        e.clientY < rect.top || 
        e.clientY > rect.bottom
      ) {
        return;
      }

      const { clientX, clientY } = e;
      const distance = Math.hypot(clientX - lastPosRef.current.x, clientY - lastPosRef.current.y);
      
      // Only add image if moved enough distance
      if (distance > 100) {
        lastPosRef.current = { x: clientX, y: clientY };
        
        // Calculate position relative to the container
        // This ensures the images stay correctly positioned even if the user scrolls
        // (since the container is relative and this component is absolute inside it)
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        
        const newImage = {
          x: relativeX,
          y: relativeY,
          id: Date.now(),
          imgIndex: Math.floor(Math.random() * images.length),
        };

        setTrail((prev) => [...prev.slice(-5), newImage]); 
        
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setTrail([]);
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [containerRef]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: "180px",
              height: "240px",
              x: "-50%",
              y: "-50%",
            }}
            className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <img 
              src={images[item.imgIndex]} 
              alt="Scholar" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
