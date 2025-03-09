
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsoleOutput } from '@/components/ConsoleOutput';
import { useCodeExecution } from '@/hooks/useCodeExecution';
import { editorDefaultValue } from '@/utils/monacoConfig';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [code, setCode] = useState(editorDefaultValue);
  const { executeCode, clearConsole, consoleOutput, isExecuting } = useCodeExecution();
  const isMobile = useIsMobile();

  const handleRunCode = () => {
    executeCode(code);
  };

  return (
    <motion.div 
      className="flex flex-col h-screen overflow-hidden pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header onRunCode={handleRunCode} isExecuting={isExecuting} />
      
      <ResizablePanelGroup
        direction={isMobile ? "vertical" : "horizontal"}
        className="flex-1"
      >
        <ResizablePanel defaultSize={50} minSize={30} className="bg-editor-background">
          <CodeEditor value={code} onChange={setCode} />
        </ResizablePanel>
        
        <ResizableHandle withHandle className="bg-border" />
        
        <ResizablePanel defaultSize={50} minSize={30} className="bg-console-background">
          <ConsoleOutput output={consoleOutput} onClear={clearConsole} />
        </ResizablePanel>
      </ResizablePanelGroup>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
