import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCard = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        // Initialize GSAP animation with ScrollTrigger
        gsap.fromTo(
            cardRef.current,
            {
                opacity: 0,
                y: 100,
                scale: 0.9, // Start slightly smaller for a pop-in effect
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",  // Start animation when card is near the viewport
                    end: "top 30%",   // Adjust the end point based on when you want the animation to end
                    scrub: true,
                    toggleActions: "play reverse play reverse", // Play the animation forward and reverse when leaving
                },
            }
        );
    }, []);

    return (
        <div ref={cardRef} className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform">
            <h3 className="text-xl font-semibold mb-2">Animated Card</h3>
            <p className="text-gray-700">
                This card animates as it comes into the viewport and reverses the animation when it leaves.
            </p>
        </div>
    );
};

export default AnimatedCard;
