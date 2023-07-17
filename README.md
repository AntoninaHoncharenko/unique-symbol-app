# Unique-symbol-app

This is a Unique-symbol App created using React and Vite, a fast build tool for modern web applications. The application allows users to search for a unique symbol in text. 

## Usage

To use the application, you can follow these steps:

1. Clone the repository to your local computer.
2. Install the required dependencies by running the command npm install.
3. Start the development server using the command npm run dev.
4. Open the application in your browser at http://localhost:5173.

## Available Scripts

In the project directory, you can run:

### "npm run dev"

Runs the app in development mode. Open http://localhost:5173 to view it in the browser.

### "npm run build"

Builds the app for production to the build folder.

### "npm run lint"

Lints the src directory using ESLint. It reports unused-disable-directives and enforces a maximum number of warnings of 0.

### "npm run preview"

Builds the app and previews the production build locally.

## Technologies

The Unique-symbol App is built using the React.

## Functionality

The program accepts text as input and finds in each word of this text the very first symbol that is NOT repeated in the analyzed word. Further, from the received set of symbols, the program select the first unique one (that is, the one that is no longer found in the set) and show it.
