import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const hasPlayed = useRef(false);

  // 🎬 Play video on first interaction
  useEffect(() => {
    const playVideo = () => {
      if (!hasPlayed.current && videoRef.current) {
        hasPlayed.current = true;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", playVideo, { once: true });
    window.addEventListener("mousemove", playVideo, { once: true });

    return () => {
      window.removeEventListener("scroll", playVideo);
      window.removeEventListener("mousemove", playVideo);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover object-[center_20%]"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
          Mohammed Kumeal M. Bagban
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
        Python & Java Full Stack Developer <br />
        AI/ML Enthusiast | Problem Solver | Builder <br /><br />

         Turning ideas into scalable, real-world applications with clean design and strong backend systems.
        </p>

        {/* 🚀 Scroll Button */}
        <a href="#projects">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition glow-btn">
            View Projects
          </button>
        </a>
      </motion.div>

    </section>
  );
}