
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 py-2 px-4 bg-background/90 backdrop-blur-md border-t border-border text-center z-10 shadow-sm"
    >
      <Link 
        to="https://github.com/aniket-sharma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
      >
        <Github className="h-3.5 w-3.5" />
        <span>Made by Aniket Sharma</span>
      </Link>
    </motion.footer>
  );
}
