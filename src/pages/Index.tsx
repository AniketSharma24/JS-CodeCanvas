
import { useState } from 'react';
import { Header } from '@/components/Header';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsoleOutput } from '@/components/ConsoleOutput';
import { useCodeExecution } from '@/hooks/useCodeExecution';
import { editorDefaultValue } from '@/utils/monacoConfig';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { motion } from 'framer-motion';

const Index = () => {
  const [code, setCode] = useState(editorDefaultValue);
  const { executeCode, clearConsole, consoleOutput, isExecuting } = useCodeExecution();

  const handleRunCode = () => {
    executeCode(code);
  };

  return (
    <motion.div 
      className="flex flex-col h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header onRunCode={handleRunCode} isExecuting={isExecuting} />
      
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1"
      >
        <ResizablePanel defaultSize={50} minSize={30}>
          <CodeEditor value={code} onChange={setCode} />
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={30}>
          <ConsoleOutput output={consoleOutput} onClear={clearConsole} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </motion.div>
  );
};

export default Index;
