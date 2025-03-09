
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.6, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] text-accent" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: 30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.6, opacity: 0, rotate: -30 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] text-accent" />
        </motion.div>
      )}
    </Button>
  );
}
