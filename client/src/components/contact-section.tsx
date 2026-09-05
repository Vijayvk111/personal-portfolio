import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16 text-neon-cyan neon-text">
          Initiate Contact
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-rajdhani font-bold text-neon-green mb-6">
              Let's Build The Future Together
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to transform your ideas into cutting-edge digital experiences? Let's connect and create something extraordinary.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-electric-purple rounded-full flex items-center justify-center">
                  <Mail className="text-navy" size={20} />
                </div>
                <div>
                  <div className="font-rajdhani font-semibold text-neon-cyan">Email</div>
                  <a href="mailto:vijaykumard111vk@gmail.com" className="text-gray-300 hover:text-neon-cyan transition-colors">vijaykumard111vk@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-green rounded-full flex items-center justify-center">
                  <Phone className="text-navy" size={20} />
                </div>
                <div>
                  <div className="font-rajdhani font-semibold text-neon-pink">Phone</div>
                  <a href="tel:+919884504008" className="text-gray-300 hover:text-neon-pink transition-colors">+91 98845 04008</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full flex items-center justify-center">
                  <MapPin className="text-navy" size={20} />
                </div>
                <div>
                  <div className="font-rajdhani font-semibold text-neon-green">Location</div>
                  <div className="text-gray-300">Tamil Nadu, India</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vijaykumard111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-electric-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                title="GitHub"
              >
                <FaGithub className="text-navy" size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/vijaykumard111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-green rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="text-navy" size={20} />
              </a>
              <a 
                href="https://twitter.com/vijaykumard111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                title="Twitter"
              >
                <FaTwitter className="text-navy" size={20} />
              </a>
              <a 
                href="mailto:vijaykumard111vk@gmail.com" 
                className="w-12 h-12 bg-gradient-to-r from-electric-purple to-neon-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                title="Email"
              >
                <Mail className="text-navy" size={20} />
              </a>
            </div>
          </div>
          
          <div className="glass-morphism p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-neon-cyan font-rajdhani font-semibold mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy border border-neon-cyan/30 rounded-lg px-4 py-3 text-gray-100 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <Label className="block text-neon-cyan font-rajdhani font-semibold mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-navy border border-neon-cyan/30 rounded-lg px-4 py-3 text-gray-100 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <Label className="block text-neon-cyan font-rajdhani font-semibold mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-navy border border-neon-cyan/30 rounded-lg px-4 py-3 text-gray-100 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Enter subject"
                  required
                />
              </div>
              
              <div>
                <Label className="block text-neon-cyan font-rajdhani font-semibold mb-2">
                  Message
                </Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-navy border border-neon-cyan/30 rounded-lg px-4 py-3 text-gray-100 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Enter your message"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full glow-border bg-navy hover:bg-neon-cyan hover:text-navy py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
