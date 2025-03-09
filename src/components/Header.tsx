
import { ThemeToggle } from "./ThemeToggle";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-10"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          CodeCanvas
        </h1>
      </div>
      
      <Button 
        onClick={onRunCode}
        disabled={isExecuting}
        className="gap-2 px-5 py-2 button-glow bg-accent text-white hover:bg-accent/90 transition-all absolute left-1/2 transform -translate-x-1/2 shadow-md"
      >
        <Play className="h-4 w-4" />
        <span>Run</span>
      </Button>
      
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
