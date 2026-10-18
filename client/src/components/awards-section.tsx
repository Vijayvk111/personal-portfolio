import { Trophy, Medal, Award as AwardIcon, Image as ImageIcon } from "lucide-react";

interface AwardProps {
  title: string;
  date: string;
  issuer: string;
  description?: string;
  icon: React.ReactNode;
  mediaUrl?: string;
  color: string;
}

function AwardCard({ title, date, issuer, description, icon, mediaUrl, color }: AwardProps) {
  return (
    <div className={`glass-morphism rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] border border-${color}/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] group`}>
      {/* Media Section */}
      <div className={`relative h-52 w-full bg-navy/80 border-b border-${color}/20 overflow-hidden flex items-center justify-center`}>
        {mediaUrl ? (
          <a 
            href={mediaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full h-full flex items-center justify-center relative cursor-pointer group/award block"
            title="Click to view full certificate"
          >
            <img 
              src={mediaUrl} 
              alt={title} 
              className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/award:scale-105"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover/award:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-neon-cyan font-rajdhani text-xs font-bold bg-navy/90 px-3 py-1.5 rounded-lg border border-neon-cyan shadow-lg">
                View Certificate ↗
              </span>
            </div>
          </a>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
            <ImageIcon size={40} className={`mb-2 text-${color}`} />
            <span className="font-rajdhani text-sm text-gray-400">Certificate Pending</span>
          </div>
        )}
        
        {/* Glow effect overlay */}
        <div className={`absolute inset-0 bg-${color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-lg bg-navy/80 text-${color}`}>
            {icon}
          </div>
          <span className={`text-sm font-mono px-3 py-1 rounded-full bg-${color}/10 text-${color} border border-${color}/20`}>
            {date}
          </span>
        </div>
        
        <h3 className="text-xl font-rajdhani font-bold text-gray-100 mb-1">
          {title}
        </h3>
        
        <p className={`text-sm font-orbitron text-${color} mb-4`}>
          {issuer}
        </p>
        
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mt-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const awards = [
    {
      title: "MInT-athon 2025-26",
      date: "07/2026",
      issuer: "MInT Initiative, IIT Madras",
      description: "Selected among 270+ ideas, received prototype development funding, and showcased our AI-based mobility solution at the MInT Mobility Summit 2026, competing alongside students, startups, and industry professionals.",
      icon: <Trophy size={24} />,
      color: "neon-cyan",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/mintathon.jpg`
    },
    {
      title: "Achievers Award",
      date: "04/2026",
      issuer: "Alpha College of Engineering",
      icon: <AwardIcon size={24} />,
      color: "electric-purple",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/achievers-award.png`
    },
    {
      title: "3rd Place Winner - PALS Think2Impact",
      date: "01/2026",
      issuer: "Industry Problem Solving Workshop, PALS",
      icon: <Medal size={24} />,
      color: "neon-pink",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/pals-think2impact.png`
    },
    {
      title: "Academic Topper (2nd Rank)",
      date: "2025",
      issuer: "Alpha College of Engineering",
      description: "Academic Topper award for securing Second Rank in Anna University Examination during odd semester of academic year 2024-2025.",
      icon: <AwardIcon size={24} />,
      color: "neon-green",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/academic-topper-2.jpg`
    },
    {
      title: "Winner of PALS TurboTech Build Hackathon",
      date: "10/2025",
      issuer: "Kaggle Platform, PALS",
      description: "Secured 3rd place in PALS TurboTech Build Hackathon on Kaggle Platform. The Challenge involved a classification task to identify crop varieties such as Rice, Pistachio & Grapevine leaves using a deep learning model.",
      icon: <Trophy size={24} />,
      color: "neon-cyan",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/pals-turbotech.jpg`
    },
    {
      title: "Finalist - CED AU Student Startify Hackathon",
      date: "07/2025",
      issuer: "CED Anna University",
      description: "Completed in Final round of presentation.",
      icon: <AwardIcon size={24} />,
      color: "electric-purple",
      mediaUrl: undefined
    },
    {
      title: "Academic Topper (4th Rank)",
      date: "2024",
      issuer: "Alpha College of Engineering",
      description: "Academic Topper award for securing Fourth Rank in Anna University Examination during odd semester of academic year 2023-2024.",
      icon: <AwardIcon size={24} />,
      color: "neon-pink",
      mediaUrl: `${import.meta.env.BASE_URL}certificates/academic-topper-4.jpg`
    }
  ];

  return (
    <section id="awards" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-electric-purple neon-text mb-4 inline-block">
            Awards & Achievements
          </h2>
          <p className="text-gray-400 font-rajdhani text-xl max-w-2xl mx-auto">
            A showcase of my academic excellence, hackathon victories, and industry recognition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}
