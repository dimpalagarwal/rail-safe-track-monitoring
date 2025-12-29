import { useEffect, useState } from "react";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png"
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <img
        src={images[index]}
        alt="Railway Infrastructure"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          Rail Track Tampering Detection System
        </h1>
        <p className="text-white/90 max-w-2xl text-sm md:text-base">
          AI-powered monitoring for early detection of threats to railway
          infrastructure.
        </p>
      </div>
    </section>
  );
}
