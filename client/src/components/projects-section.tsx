import { Rocket, Brain, Headset, ExternalLink, BarChart3, PieChart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ 
  icon, 
  title, 
  description, 
  longDescription, 
  technologies, 
  iconColor,
  gradientFrom,
  gradientTo,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <div className="project-card h-80">
      <div className="project-card-inner">
        <div className="project-card-front glass-morphism p-6 flex flex-col justify-between">
          <div className="flex-1 flex items-center justify-center">
            <div className={iconColor}>
              {icon}
            </div>
          </div>
          <div>
            <h3 className={`text-xl font-rajdhani font-bold ${iconColor} mb-2`}>
              {title}
            </h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </div>
        
        <div className={`project-card-back bg-gradient-to-br ${gradientFrom} ${gradientTo} p-6 flex flex-col justify-between`}>
          <div>
            <h3 className="text-xl font-rajdhani font-bold text-navy mb-4">
              {title}
            </h3>
            <p className="text-navy text-sm mb-4">
              {longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span key={tech} className="bg-navy text-neon-cyan px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-navy text-neon-cyan px-4 py-2 rounded hover:bg-space transition-colors duration-300 flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-navy text-neon-cyan px-4 py-2 rounded hover:bg-space transition-colors duration-300 flex items-center gap-2">
                <FaGithub size={16} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      icon: <Brain size={96} />,
      title: "RoadHazeX",
      description: "AI-based Smart road hazards reporting and smart navigation system",
      longDescription: "Developed an AI-powered platform to detect, report, validate, and monitor road hazards using image/video inputs, GPS tagging, and intelligent hazard classification. Designed a real-time workflow connecting citizen reports, AI-based validation, smart jurisdiction mapping, and municipal dashboards to support faster road-safety response.",
      technologies: ["Python", "Flask", "React.js", "Firebase", "CLIP", "Computer Vision", "vision language model"],
      iconColor: "text-neon-cyan",
      gradientFrom: "from-neon-cyan",
      gradientTo: "to-electric-purple",
      githubUrl: "https://github.com/Vijayvk111/RoadHazeX",
      liveUrl: "https://roadhazex.web.app"
    },
    {
      icon: <Rocket size={96} />,
      title: "Biomeal Buddy",
      description: "AI-based meal recommendation system",
      longDescription: "Developed an AI-based meal recommendation system that uses user health, dietary preferences, and wearable data to suggest personalized meal options. Built a prototype backend with FastAPI and integrated recommendation logic to provide personalized and data-driven nutrition suggestions.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Wearable Data"],
      iconColor: "text-neon-pink",
      gradientFrom: "from-neon-pink",
      gradientTo: "to-neon-green"
    },
    {
      icon: <Headset size={96} />,
      title: "Loan Assist",
      description: "Mini UPI-Style Payment Record Book",
      longDescription: "Built a full-stack UPI-style payment app with secure JWT authentication and encrypted PIN storage. Developed REST APIs with idempotent transaction handling to prevent duplicate payments. Implemented indexed database queries enabling fast transaction search, filtering, and history tracking.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "JWT"],
      iconColor: "text-neon-green",
      gradientFrom: "from-neon-green",
      gradientTo: "to-electric-purple"
    },
    {
      icon: <BarChart3 size={96} />,
      title: "IPL Analysis",
      description: "Interactive Power BI dashboard for IPL performance",
      longDescription: "Built an interactive Power BI dashboard to analyze IPL match, team, and player performance using historical data from 2008 onwards. Cleaned and transformed datasets using Power Query and created interactive visualizations with DAX to identify performance trends and key insights.",
      technologies: ["Power BI", "Power Query", "DAX", "Data Vis"],
      iconColor: "text-neon-cyan",
      gradientFrom: "from-neon-cyan",
      gradientTo: "to-electric-purple",
      githubUrl: "https://github.com/Vijayvk111/IPL-Analysis-PowerBI"
    },
    {
      icon: <PieChart size={96} />,
      title: "Amazon Sales Dashboard",
      description: "Interactive dashboard for Amazon sales performance",
      longDescription: "Developed an interactive Amazon Sales Dashboard to analyze sales performance and business trends across 2019-2020. Transformed and analyzed sales data using Power BI, creating interactive visualizations and KPIs to derive actionable insights from sales performance.",
      technologies: ["Power BI", "Power Query", "DAX", "Data Vis"],
      iconColor: "text-neon-pink",
      gradientFrom: "from-neon-pink",
      gradientTo: "to-neon-green",
      githubUrl: "https://github.com/Vijayvk111/Amazon-Sales-Dashboard-PowerBI"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16 text-neon-cyan neon-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
