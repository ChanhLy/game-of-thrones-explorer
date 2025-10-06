# Game of Thrones Explorer

A full-stack web application for exploring Game of Thrones characters, built with React (frontend) and Node.js/Express (backend).

## How to Setup This Project

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Project Structure

This project consists of two main parts:

- **web/** - React frontend application with TypeScript and Vite
- **server/** - Node.js/Express backend API with TypeScript support

### Setup Instructions

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone https://github.com/ChanhLy/game-of-thrones-explorer.git
   cd game-of-thrones-explorer
   ```

2. **Setup the backend server** (required for the frontend to work):

   ```bash
   cd server
   npm install
   npm run dev
   ```

   The server will start on `http://localhost:3000`

3. **Setup the frontend** (in a new terminal):

   ```bash
   cd web
   npm install
   npm run dev
   ```

   The web application will start on `http://localhost:5173`

### Available Scripts

**Server (backend) scripts:**

- `npm run dev` - Starts the development server with auto-restart
- `npm start` - Starts the production server

**Web (frontend) scripts:**

- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

### Development Workflow

1. Make sure both the server and web applications are running
2. The frontend automatically connects to the backend API
3. Any changes to the code will automatically reload the application
4. Check the browser console and terminal for any errors

### Technology Stack

**Frontend:**

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

**Backend:**

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **dotenv** - Environment variable management

### Troubleshooting

- **Port conflicts**: If port 5173 is already in use, Vite will automatically use the next available port
- **API connection issues**: Ensure the backend server is running on port 3000
- **Module errors**: Try deleting `node_modules` and running `npm install` again
