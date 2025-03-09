
import { useRef, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { monacoOptions, editorDefaultValue } from '@/utils/monacoConfig';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function CodeEditor({ value, onChange }: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  // Handle Monaco editor mount
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    
    // Setup Monaco theme
    monaco.editor.defineTheme('lightCustom', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#F8FAFC',
        'editor.foreground': '#1E293B',
        'editor.lineHighlightBackground': '#EEF2FF',
        'editorCursor.foreground': '#3B82F6',
        'editorWhitespace.foreground': '#CBD5E1',
        'editorIndentGuide.background': '#E2E8F0',
        'editor.selectionBackground': '#BFDBFE',
      },
    });

    monaco.editor.defineTheme('darkCustom', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#1E293B',
        'editor.foreground': '#F8FAFC',
        'editor.lineHighlightBackground': '#334155',
        'editorCursor.foreground': '#60A5FA',
        'editorWhitespace.foreground': '#475569', 
        'editorIndentGuide.background': '#334155',
        'editor.selectionBackground': '#3B82F6',
      },
    });

    // Set initial theme based on the current document theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    monaco.editor.setTheme(isDarkMode ? 'darkCustom' : 'lightCustom');

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isDark = document.documentElement.classList.contains('dark');
          monaco.editor.setTheme(isDark ? 'darkCustom' : 'lightCustom');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Focus the editor
    editor.focus();

    // Setup auto-formatting on save
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      editor.getAction('editor.action.formatDocument').run();
    });

    return () => {
      observer.disconnect();
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="h-full border-r border-border"
    >
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue={editorDefaultValue}
        theme="vs-dark"
        options={monacoOptions}
        onMount={handleEditorDidMount}
        value={value}
        onChange={(value) => onChange(value || '')}
        loading={
          <div className="flex items-center justify-center h-full w-full bg-editor-background">
            <Skeleton className="h-[90%] w-[90%] rounded-md" />
          </div>
        }
      />
    </motion.div>
  );
}
