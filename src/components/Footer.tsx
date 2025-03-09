
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 py-2 px-4 bg-background/80 backdrop-blur-sm border-t border-border text-center z-10"
    >
      <Link 
        to="https://github.com/aniket-sharma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Made by Aniket Sharma
      </Link>
    </motion.footer>
  );
}
