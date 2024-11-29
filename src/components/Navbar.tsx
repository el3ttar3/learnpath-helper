import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-gray-900 opacity-80" />
            <span className="text-2xl font-bold text-gray-900 opacity-80">Top-Up</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary transition-colors">Home</Link>
            <Link to="/paths" className="text-gray-900 hover:text-primary transition-colors">Learning Paths</Link>
            <Link to="/courses" className="text-gray-900 hover:text-primary transition-colors">Courses</Link>
            <Link to="/events" className="text-gray-900 hover:text-primary transition-colors">Events</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/signin" className="px-4 py-2 text-gray-900 hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;