import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./ui/Section";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  // The sentence we are assembling
  const sentence = "And we infuse this philosophy into a two-part experience designed to challenge and inspire.";
  const words = sentence.split(" ");

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Pin the section while scrolling
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Keep pinned for 1.5x screen height
        pin: true,
      });

      // 2. Play the animation
      // We start it earlier ("top 80%") so by the time the user reaches the section,
      // the items are already partially visible and assembling. This prevents the "empty screen" feel.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "+=230%", // 80% (until pin) + 150% (pinned)
          scrub: 1, // Smooth scrub
        }
      });

      // Animate each word from a scattered state to its final position
      const wordElements = gsap.utils.toArray(".scatter-word");

      // Start state: words are scattered, rotated, and slightly blurry
      gsap.set(wordElements, {
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-60, 60),
        opacity: 0,
        scale: () => gsap.utils.random(0.5, 1.5),
        filter: "blur(8px)"
      });

      // Timeline animation: bring them all together
      tl.to(wordElements, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: {
          each: 0.05,
          from: "random" // They come together randomly
        },
        duration: 2,
        ease: "power2.out" // Use out ease for quicker early movement
      });

      // Fade in the top label at the end
      tl.from(".exp-label", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, ">-0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[#E8F3E8] relative z-10 w-full max-w-none p-0 overflow-hidden h-screen" ref={containerRef}>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 w-full max-w-[1400px] mx-auto text-center">

        <span className="exp-label absolute top-24 md:top-32 lg:top-40 inline-block text-[#1A4D2E] text-xs md:text-sm uppercase tracking-[0.4em] font-medium border border-[#1A4D2E]/20 px-6 py-2 rounded-full">
          The Jianshan Experience
        </span>

        {/* The resulting sentence container */}
        <div
          ref={wordsRef}
          className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-3 max-w-[90vw] md:max-w-3xl lg:max-w-4xl pt-16 md:pt-0"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="scatter-word text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic text-[#0F2E18] leading-[1.1] inline-block"
            >
              {word}
            </span>
          ))}
        </div>

      </div>
    </Section>
  );
}
