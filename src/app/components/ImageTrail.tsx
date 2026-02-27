import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/trail/Frame%2010.webp",
  "/trail/Frame%2011.webp",
  "/trail/Frame%2012.webp",
  "/trail/Frame%2013.webp",
  "/trail/Frame%2014.webp",
  "/trail/Frame%2015.webp",
  "/trail/Frame%2016.webp",
  "/trail/Frame%2017.webp",
  "/trail/Frame%2018.webp",
  "/trail/Frame%2019.webp",
  "/trail/Frame%2020.webp",
  "/trail/Frame%2022.webp",
  "/trail/Frame%2024.webp",
  "/trail/Frame%2026.webp",
  "/trail/Frame%2028.webp",
];

interface ImageTrailProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function ImageTrail({ containerRef }: ImageTrailProps) {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number; imgIndex: number }[]>([]);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
  const timerRef = useRef<number>();
  const lastPosRef = useRef({ x: 0, y: 0 });
  const bagRef = useRef<number[]>([]);
  const lastImageIndexRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const loaded = new Set<number>();

    images.forEach((src, index) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        loaded.add(index);
        if (mounted) {
          setLoadedIndices(Array.from(loaded));
        }
      };
      img.src = src;
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // Reset bag when available images change.
    bagRef.current = [];
  }, [loadedIndices]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container || loadedIndices.length === 0) return;

    const getNextImageIndex = () => {
      if (bagRef.current.length === 0) {
        const shuffled = [...loadedIndices].sort(() => Math.random() - 0.5);

        // Avoid immediate repeats between bag cycles when possible.
        if (shuffled.length > 1 && shuffled[0] === lastImageIndexRef.current) {
          const first = shuffled.shift();
          if (first !== undefined) shuffled.push(first);
        }

        bagRef.current = shuffled;
      }

      const next = bagRef.current.shift();
      const nextIndex = next ?? loadedIndices[0];
      lastImageIndexRef.current = nextIndex;
      return nextIndex;
    };

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
          imgIndex: getNextImageIndex(),
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
  }, [containerRef, loadedIndices]);

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
