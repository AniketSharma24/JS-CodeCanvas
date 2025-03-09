
import { useEffect, useRef } from 'react';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

interface ConsoleOutput {
  type: 'log' | 'error' | 'info' | 'warn' | 'clear';
  content: string;
  timestamp: number;
}

interface ConsoleOutputProps {
  output: ConsoleOutput[];
  onClear: () => void;
}

export function ConsoleOutput({ output, onClear }: ConsoleOutputProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [output]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex flex-col h-full bg-console-background"
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <h2 className="text-sm font-medium">Console Output</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClear}
          disabled={output.length === 0}
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          aria-label="Clear console"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        {output.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground">
              Run your code to see output here
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {output.map((item, index) => (
              <motion.div
                key={`${item.timestamp}-${index}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`console-text ${
                  item.type === 'error'
                    ? 'console-text-error'
                    : item.type === 'warn'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : item.type === 'info'
                    ? 'console-text-info'
                    : item.type === 'clear'
                    ? 'text-muted-foreground italic'
                    : ''
                }`}
              >
                {item.content}
              </motion.div>
            ))}
          </div>
        )}
      </ScrollArea>
    </motion.div>
  );
}
