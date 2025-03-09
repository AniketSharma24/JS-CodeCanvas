
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
      rules: [
        { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'cf222e' },
        { token: 'string', foreground: '0a3069' },
        { token: 'number', foreground: '0550ae' },
        { token: 'regexp', foreground: '116329' },
        { token: 'type', foreground: '8250df' },
        { token: 'class', foreground: '953800' },
        { token: 'function', foreground: '8250df' },
        { token: 'variable', foreground: '24292f' },
        { token: 'variable.predefined', foreground: '116329' },
      ],
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
      rules: [
        { token: 'comment', foreground: '8b949e', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff7b72' },
        { token: 'string', foreground: 'a5d6ff' },
        { token: 'number', foreground: '79c0ff' },
        { token: 'regexp', foreground: '7ee787' },
        { token: 'type', foreground: 'ff7b72' },
        { token: 'class', foreground: 'ffa657' },
        { token: 'function', foreground: 'd2a8ff' },
        { token: 'variable', foreground: 'c9d1d9' },
        { token: 'variable.predefined', foreground: '7ee787' },
      ],
      colors: {
        'editor.background': '#111827',
        'editor.foreground': '#E5E7EB',
        'editor.lineHighlightBackground': '#1F2937',
        'editorCursor.foreground': '#3B82F6',
        'editorWhitespace.foreground': '#4B5563',
        'editorIndentGuide.background': '#374151',
        'editor.selectionBackground': '#2563EB40',
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
        options={{
          fontSize: 14,
          fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
          fontLigatures: true,
          lineHeight: 24,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          renderLineHighlight: 'all',
          scrollbar: {
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
            useShadows: false,
          },
          padding: { top: 16, bottom: 16 },
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          formatOnType: true,
          formatOnPaste: true,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          smoothScrolling: true,
          renderWhitespace: 'selection'
        }}
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
