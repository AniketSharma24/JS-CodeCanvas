
import { useState, useCallback } from 'react';

interface ConsoleOutput {
  type: 'log' | 'error' | 'info' | 'warn' | 'clear';
  content: string;
  timestamp: number;
}

export function useCodeExecution() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<ConsoleOutput[]>([]);

  const clearConsole = useCallback(() => {
    setConsoleOutput([]);
  }, []);

  const executeCode = useCallback((code: string) => {
    // Clear previous output
    clearConsole();
    setIsExecuting(true);
    
    // Create a new output array
    const output: ConsoleOutput[] = [];
    
    try {
      // Create a sandbox function to capture console methods
      const sandboxedEval = (codeToExecute: string) => {
        // Save the original console methods
        const originalConsole = {
          log: console.log,
          error: console.error,
          warn: console.warn,
          info: console.info,
          clear: console.clear,
        };
        
        // Override console methods to capture output
        console.log = (...args) => {
          const content = args.map(arg => 
            typeof arg === 'object' 
              ? JSON.stringify(arg, null, 2)
              : String(arg)
          ).join(' ');
          
          output.push({
            type: 'log',
            content,
            timestamp: Date.now(),
          });
        };
        
        console.error = (...args) => {
          const content = args.map(arg => 
            typeof arg === 'object' 
              ? JSON.stringify(arg, null, 2)
              : String(arg)
          ).join(' ');
          
          output.push({
            type: 'error',
            content,
            timestamp: Date.now(),
          });
        };
        
        console.warn = (...args) => {
          const content = args.map(arg => 
            typeof arg === 'object' 
              ? JSON.stringify(arg, null, 2)
              : String(arg)
          ).join(' ');
          
          output.push({
            type: 'warn',
            content,
            timestamp: Date.now(),
          });
        };
        
        console.info = (...args) => {
          const content = args.map(arg => 
            typeof arg === 'object' 
              ? JSON.stringify(arg, null, 2)
              : String(arg)
          ).join(' ');
          
          output.push({
            type: 'info',
            content,
            timestamp: Date.now(),
          });
        };
        
        console.clear = () => {
          output.push({
            type: 'clear',
            content: 'Console was cleared',
            timestamp: Date.now(),
          });
        };
        
        try {
          // Execute the code
          // eslint-disable-next-line no-new-func
          const result = new Function(codeToExecute)();
          
          // If the result is not undefined, log it
          if (result !== undefined) {
            console.log(result);
          }
        } finally {
          // Restore original console methods
          console.log = originalConsole.log;
          console.error = originalConsole.error;
          console.warn = originalConsole.warn;
          console.info = originalConsole.info;
          console.clear = originalConsole.clear;
        }
      };
      
      // Execute the code in the sandbox
      sandboxedEval(code);
      
    } catch (error) {
      // Handle any errors that occur during execution
      output.push({
        type: 'error',
        content: error instanceof Error 
          ? `${error.name}: ${error.message}` 
          : String(error),
        timestamp: Date.now(),
      });
    } finally {
      // Update the console output state
      setConsoleOutput(output);
      setIsExecuting(false);
    }
  }, [clearConsole]);

  return {
    executeCode,
    clearConsole,
    consoleOutput,
    isExecuting,
  };
}
