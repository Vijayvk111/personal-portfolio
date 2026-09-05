import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const typingText = useTypingAnimation("AI Engineer/Data Analyst", 100);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6">
            <span className="text-neon-cyan neon-text">VIJAY</span>
            <span className="text-neon-pink neon-text">PORTFOLIO</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-rajdhani mb-8 h-8">
            <span className="text-neon-green">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-inter">
            Transforming data into intelligent insights with advanced AI and machine learning technologies
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#projects"
              className="glow-border bg-navy hover:bg-neon-cyan hover:text-navy px-8 py-4 rounded-full font-rajdhani font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-navy px-8 py-4 rounded-full font-rajdhani font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="text-neon-cyan text-2xl" />
        </div>
      </div>
    </section>
  );
}
