import React from 'react';

/**
 * SectionTransition – Creates an ultra-smooth color transition between two sections
 * using the mask-image multi-stop technique (eased opacity curve).
 *
 * Instead of a simple linear gradient (which produces ugly grey bands between
 * contrasting colors), this overlays the "from" color on top of the "to" color
 * and uses a mask with many stops that follow an ease-out curve to fade between them.
 */
interface SectionTransitionProps {
    fromColor: string;
    toColor: string;
    className?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
    fromColor,
    toColor,
    className = '',
}) => {
    // Multi-stop mask for smooth eased fade (ease-out curve)
    const maskImage = `linear-gradient(to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.993) 8.1%,
    rgba(0,0,0,0.964) 15.5%,
    rgba(0,0,0,0.918) 22.5%,
    rgba(0,0,0,0.853) 29%,
    rgba(0,0,0,0.768) 35.3%,
    rgba(0,0,0,0.668) 41.2%,
    rgba(0,0,0,0.557) 47.1%,
    rgba(0,0,0,0.443) 52.9%,
    rgba(0,0,0,0.332) 58.8%,
    rgba(0,0,0,0.232) 64.7%,
    rgba(0,0,0,0.147) 71%,
    rgba(0,0,0,0.082) 77.5%,
    rgba(0,0,0,0.036) 84.5%,
    rgba(0,0,0,0.007) 91.9%,
    rgba(0,0,0,0) 100%
  )`;

    return (
        <div
            className={`w-full h-[120px] md:h-[20vw] max-h-[280px] relative ${className}`}
            style={{ backgroundColor: toColor }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: fromColor,
                    maskImage,
                    WebkitMaskImage: maskImage,
                }}
            />
        </div>
    );
};

export default SectionTransition;
