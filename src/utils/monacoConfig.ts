
export const monacoOptions = {
  fontSize: 14,
  fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
  fontLigatures: true,
  lineHeight: 1.6,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  renderLineHighlight: 'all',
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
    useShadows: false,
  },
  suggestFontSize: 14,
  suggestLineHeight: 20,
  padding: { top: 16, bottom: 16 },
  wordWrap: 'on',
  automaticLayout: true,
  tabSize: 2,
  formatOnPaste: true,
  formatOnType: true,
};

export const editorDefaultValue = `// Write your JavaScript code here
console.log("Hello, world!");

// Example: Create a simple function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Call the function
console.log(greet("Developer"));

// Try different console methods
console.info("This is an informational message");
console.warn("This is a warning");
console.error("This is an error message");

// Working with objects
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

console.log(user);

// Uncomment to see how errors are handled
// throw new Error("This is a custom error");
`;
