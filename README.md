
# CodeCanvas - Online JavaScript Editor & Compiler

![CodeCanvas Preview](public/og-image.png)

## About

CodeCanvas is a lightweight, browser-based JavaScript editor and compiler that allows you to write, test, and run JavaScript code in real-time. Perfect for quick prototyping, learning, or debugging JavaScript snippets without the need for a local development environment.

## Features

- **Real-time JavaScript Execution** - Write and run JavaScript code directly in your browser
- **Live Console Output** - View console logs, warnings, errors, and other outputs in real-time
- **Elegant Interface** - Clean, distraction-free coding environment with light/dark theme support
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Monaco Editor Integration** - Powerful code editing features including syntax highlighting and auto-completion

## Technology Stack

- **Frontend Framework**: React with TypeScript for type-safe component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first styling with custom theming
- **UI Components**: shadcn/ui for accessible, customizable, and reusable components
- **Code Editor**: Monaco Editor (via @monaco-editor/react) - the same editor that powers VS Code
- **State Management**: React hooks for local state management
- **Animation**: Framer Motion for smooth, physics-based animations
- **Responsive Layout**: React Resizable Panels for adjustable editor and console panels
- **Routing**: React Router for navigation and route management
- **Toast Notifications**: sonner for elegant toast notifications

## Project Structure

- `src/components/` - React components including the code editor and console output
- `src/hooks/` - Custom React hooks for code execution, theme management, and more
- `src/pages/` - Page-level components for different routes
- `src/utils/` - Utility functions and configuration
- `src/components/ui/` - shadcn/ui components

## Local Development

To run this project locally:

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd codecanvas

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. Write your JavaScript code in the editor panel
2. Click the "Run" button or use keyboard shortcuts to execute the code
3. View the console output in the right panel (or bottom panel on mobile)
4. Toggle between light and dark themes with the theme switch button

## Future Enhancements

- Multi-file support for more complex projects
- Code sharing via URL
- Additional language support (TypeScript, HTML/CSS)
- Save and load code snippets
- Integration with external libraries and frameworks

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by [Aniket Sharma](https://github.com/aniket-sharma)

---

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ef1dff26-57d9-4375-b205-86fe8795c201

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ef1dff26-57d9-4375-b205-86fe8795c201) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ef1dff26-57d9-4375-b205-86fe8795c201) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
