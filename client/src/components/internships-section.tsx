import { Briefcase, Award } from "lucide-react";

interface InternshipCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  mediaUrl?: string;
}

function InternshipCard({
  title,
  company,
  duration,
  description,
  skills,
  mediaUrl
}: InternshipCardProps) {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden mb-10 transition-transform duration-300 hover:scale-[1.02] border border-neon-cyan/20 glow-border">
      <div className="flex flex-col md:flex-row">
        {/* Media/Certificate Section */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-neon-cyan/20 bg-navy/50 relative overflow-hidden group">
          {mediaUrl ? (
            <div className="relative w-full h-full min-h-[200px] rounded-lg overflow-hidden border border-electric-purple/50">
              {/* If it's an image */}
              <img 
                src={mediaUrl} 
                alt={`${company} Certificate/Media`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-neon-cyan font-rajdhani font-bold bg-navy/80 px-4 py-2 rounded-lg border border-neon-cyan">View Media</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[200px] rounded-lg border-2 border-dashed border-neon-pink/30 flex flex-col items-center justify-center text-gray-400 gap-3">
              <Award size={48} className="text-neon-pink/50" />
              <span className="font-rajdhani text-sm">Certificate Placeholder</span>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="md:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-neon-cyan" size={24} />
              <h3 className="text-2xl font-rajdhani font-bold text-neon-cyan neon-text">
                {title}
              </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
              <span className="text-lg font-orbitron text-electric-purple">
                {company}
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="text-sm text-neon-pink font-mono bg-neon-pink/10 px-3 py-1 rounded-full border border-neon-pink/20 inline-block w-fit">
                {duration}
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-orbitron text-gray-400 mb-3 uppercase tracking-wider">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-navy text-neon-green px-3 py-1.5 rounded-md text-sm font-rajdhani border border-neon-green/30 hover:bg-neon-green/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InternshipsSection() {
  const internships = [
    {
      title: "Network Engineering Intern",
      company: "MITS Cisco Networking Academy & IEEE Hyderabad Section, Chennai, India",
      duration: "05/2026 - 07/2026",
      description: "Completed a 6-week hands-on internship in 'Fundamentals of Switching & Routing,' earning Cisco CCNA certifications in Introduction to Networks and Switching, Routing, and Wireless Essentials. Architected enterprise network topologies in Cisco Packet Tracer, deploying Layer 2 and Layer 3 infrastructure with Inter-VLAN routing, EtherChannel (LACP), and dual-stack IPv4/IPv6 addressing. Configured Enterprise Wireless LAN Controllers (WLC) and static routing protocols to ensure optimal traffic flow and seamless DHCP delivery across segmented network environments.",
      skills: ["Cisco Packet Tracer", "Routing & Switching", "CCNA", "IPv4/IPv6", "VLAN", "WLC"],
      mediaUrl: undefined
    },
    {
      title: "Python Development",
      company: "Pinnacle Labs, Chennai, India",
      duration: "11/2025 - 01/2026",
      description: "Developed a real-time multi-user chat application using Python, TCP sockets, Tkinter, SQLite, and multithreading with features like typing indicators, emojis, and read receipts. Built an interactive Calendar & Reminder application using Python and Tkinter with reminders, popup notifications, holiday tracking, and JSON-based data storage. Developed a Weather application using Python with an interactive GUI for retrieving and displaying weather information.",
      skills: ["Python", "TCP sockets", "Tkinter", "SQLite", "Multithreading", "JSON", "GUI"],
      mediaUrl: undefined
    },
    {
      title: "Software Development Internship",
      company: "Planora Company, Chennai, India",
      duration: "07/2025 - 08/2025",
      description: "Developed and tested software components using Java and Python, contributing to application development and debugging. Diagnosed and resolved development issues while following Git-based version control and collaborative development workflows. Participated in code reviews and improved code quality through structured debugging and testing practices.",
      skills: ["Java", "Python", "Git", "Debugging", "Testing"],
      mediaUrl: undefined
    },
    {
      title: "Artificial Intelligence Internship",
      company: "Rinex Technology, Chennai, India",
      duration: "05/2025 - 06/2025",
      description: "Developed and evaluated AI/ML models for classification and prediction tasks using Python-based workflows. Applied data cleaning, preprocessing, and feature engineering with Pandas and Scikit-learn to prepare datasets for modelling. Explored TensorFlow and OpenAI tools to support AI-driven solutions and prompt-based automation.",
      skills: ["AI/ML Models", "Python", "Pandas", "Scikit-learn", "TensorFlow", "OpenAI"],
      mediaUrl: undefined
    },
    {
      title: "Cloud-Computing Internship",
      company: "Pinnacle Labs, Chennai, India",
      duration: "04/2025 - 05/2025",
      description: "Worked with cloud platforms and assisted in deploying and managing applications on cloud infrastructure. Configured cloud services including AWS Lambda while exploring cloud-based application workflows. Applied practices related to cloud security, monitoring, and cost optimisation during deployment activities.",
      skills: ["Cloud Platforms", "AWS Lambda", "Cloud Security", "Monitoring", "Cost Optimisation"],
      mediaUrl: undefined
    },
    {
      title: "Machine Learning Internship",
      company: "Rinex Technology, Chennai, India",
      duration: "03/2025 - 05/2025",
      description: "Built and evaluated machine learning models on real-world datasets using Python, Scikit-learn, Pandas, and Matplotlib. Performed data preprocessing and feature selection, followed by model evaluation and performance tuning. Collaborated with team members to analyse model results, communicate insights, and improve predictive performance.",
      skills: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Data Preprocessing", "Feature Selection"],
      mediaUrl: undefined
    }
  ];

  return (
    <section id="internships" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16 text-electric-purple neon-text">
          Internships
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </div>
      </div>
    </section>
  );
}
