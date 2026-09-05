import { User } from "lucide-react";
import profilePicture from "@assets/profile-picture.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16 text-neon-cyan neon-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInRight">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-neon-cyan to-electric-purple rounded-full p-1">
              <div className="w-full h-full bg-navy rounded-full overflow-hidden">
                <img 
                  src={profilePicture} 
                  alt="Vijay's Profile Picture" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-rajdhani font-bold mb-6 text-neon-green">
              Building Tomorrow's AI Today
            </h3>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Vijay, an aspiring AI Engineer and Data Analyst passionate about building intelligent systems and extracting meaningful insights from data. Currently developing expertise in machine learning, data science, and emerging AI technologies through hands-on projects and continuous learning.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My goal is to leverage artificial intelligence and data analytics to solve real-world problems and contribute to the advancement of intelligent systems that make a positive impact.
            </p>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-neon-cyan">10+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-neon-pink">24/7</div>
                <div className="text-sm text-gray-400">Learning Mode</div>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-neon-green">∞</div>
                <div className="text-sm text-gray-400">Curiosity Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
