import { useEffect, useRef, useState } from "react";
import { Code2, BrainCircuit, Database, Terminal, Layout, Cpu, Network, Cloud, Activity } from "lucide-react";

interface SkillItemProps {
  name: string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
}

function SkillItem({ name, percentage, color, icon }: SkillItemProps) {
  const [width, setWidth] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slight delay for staggered effect
            setTimeout(() => setWidth(percentage), 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={itemRef} className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className={`${color} opacity-80 group-hover:opacity-100 transition-opacity`}>
            {icon}
          </div>
          <span className="font-rajdhani text-gray-200 text-lg tracking-wide group-hover:text-white transition-colors">{name}</span>
        </div>
      </div>
      <div className="h-2 w-full bg-navy rounded-full overflow-hidden border border-gray-800">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out relative ${color.replace('text-', 'bg-')}`}
          style={{ width: `${width}%` }}
        >
          {/* Glowing dot at the end of the progress bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white opacity-50 blur-[2px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItemProps[];
  borderColor: string;
}

function SkillCategory({ title, icon, skills, borderColor }: SkillCategoryProps) {
  return (
    <div className={`glass-morphism rounded-xl p-8 border-t-2 ${borderColor} hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-800">
        <div className={`p-3 rounded-lg bg-navy ${borderColor.replace('border-', 'text-')}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-orbitron font-bold text-gray-100 tracking-wider">
          {title}
        </h3>
      </div>
      
      <div>
        {skills.map((skill, idx) => (
          <SkillItem key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const categories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 size={28} />,
      borderColor: "border-neon-cyan",
      skills: [
        { name: "Python", percentage: 95, color: "text-neon-cyan", icon: <Terminal size={18} /> },
        { name: "React.js & Node.js", percentage: 85, color: "text-neon-cyan", icon: <Layout size={18} /> },
        { name: "Java & C++", percentage: 75, color: "text-neon-cyan", icon: <Cpu size={18} /> },
        { name: "FastAPI & Flask", percentage: 80, color: "text-neon-cyan", icon: <Activity size={18} /> },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={28} />,
      borderColor: "border-neon-pink",
      skills: [
        { name: "Machine Learning", percentage: 90, color: "text-neon-pink", icon: <BrainCircuit size={18} /> },
        { name: "TensorFlow & PyTorch", percentage: 85, color: "text-neon-pink", icon: <Network size={18} /> },
        { name: "Computer Vision", percentage: 85, color: "text-neon-pink", icon: <Activity size={18} /> },
        { name: "Pandas & Scikit-learn", percentage: 90, color: "text-neon-pink", icon: <Database size={18} /> },
      ]
    },
    {
      title: "Cloud, Data & Tools",
      icon: <Cloud size={28} />,
      borderColor: "border-neon-green",
      skills: [
        { name: "AWS & Cloud Platforms", percentage: 75, color: "text-neon-green", icon: <Cloud size={18} /> },
        { name: "SQL & PostgreSQL", percentage: 85, color: "text-neon-green", icon: <Database size={18} /> },
        { name: "PowerBI", percentage: 80, color: "text-neon-green", icon: <Activity size={18} /> },
        { name: "Git & Firebase", percentage: 85, color: "text-neon-green", icon: <Terminal size={18} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-space">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-purple to-neon-pink mb-4 pb-2 inline-block">
            Technical Skills
          </h2>
          <p className="text-gray-400 font-rajdhani text-xl max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiencies across modern development stacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 150}ms` }}>
              <SkillCategory {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
