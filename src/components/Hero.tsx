import { useState } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 animate-fade-up">
          Discover Your Learning Path
        </h1>
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Explore courses tailored to your goals and advance your career with expert-led content
        </p>
        
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;