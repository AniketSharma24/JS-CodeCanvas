
import { ThemeToggle } from "./ThemeToggle";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeaderProps {
  onRunCode: () => void;
  isExecuting: boolean;
}

export function Header({ onRunCode, isExecuting }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold tracking-tight">
          CodeCanvas
        </h1>
      </div>
      
      <Button 
        onClick={onRunCode}
        disabled={isExecuting}
        className="gap-2 px-5 py-2 button-glow bg-accent text-white hover:bg-accent/90 transition-all absolute left-1/2 transform -translate-x-1/2"
      >
        <Play className="h-4 w-4" />
        <span>Run</span>
      </Button>
      
      <div className="flex items-center gap-4">
        <Link 
          to="https://github.com/aniket-sharma" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Made by Aniket Sharma
        </Link>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
