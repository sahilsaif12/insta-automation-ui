
# Insta Automation UI

This project is an Instagram-inspired UI automation assignment built with React, TypeScript, Vite, and Material-UI (MUI). The main goal is to replicate a modern Instagram-like interface with interactive features, focusing on UI/UX and required functionalities, not backend integration.

## Features

- **Instagram-like Layout:**
  - Responsive sidebar with navigation icons and theme switcher (light/dark mode).
  - Main content area split into left (automation steps) and right (Instagram post simulation, comments, and DM tabs).
- **Automation Steps:**
  - Step-by-step UI for simulating automation actions (e.g., selecting posts, entering comments, sending DMs).
  - Pro-only features are visually indicated and disabled.
  - Dynamic form controls for user input (radio, switch, text fields).
- **Post Simulation:**
  - Displays a list of posts (images, captions, likes, comments, shares) from mock data.
  - Users can select posts to interact with.
- **Comments & DM Tabs:**
  - Tab switcher for toggling between Post, Comments, and DM views.
  - Simulated messaging UI with sent/received message bubbles.
  - Conditional rendering of "Go Live" button based on DM state.
- **Theming:**
  - Light and dark mode support using MUI's theming system.

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite** (for fast development)
- **Material-UI (MUI)** for UI components
- **ESLint** for code linting

## Project Structure

```
insta automation UI/
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/           # Images and SVGs
│   ├── components/
│   │   ├── Sidebar.tsx   # Sidebar navigation
│   │   ├── left-part/
│   │   │   ├── AutomationSteps.tsx  # Main automation logic
│   │   │   ├── ProFeature.tsx       # Disabled pro-only features
│   │   ├── right-side/
│   │   │   ├── InstaUI.tsx          # Instagram post & DM simulation
│   │   │   ├── Message.tsx          # Message bubble UI
│   │   │   ├── TabSwticher.tsx      # Tab switcher for Post/Comments/DM
│   ├── constants/
│   │   ├── postData.ts   # Mock post data
│   │   ├── keywordComments.ts # Predefined keywords
│   │   ├── Tabs.ts       # Tab names
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open in browser:**
   Visit the local URL shown in the terminal (usually http://localhost:5173).

## Assignment Notes

- This project is for assignment/demo purposes only. There is no backend/API integration.
- All data (posts, comments, messages) is mock/static and managed in React state.
- The focus is on achieving the required UI and interactive flows as described in the assignment.

## Customization

- You can modify the mock data in `src/constants/postData.ts` and `src/constants/keywordComments.ts`.
- The UI is fully responsive and can be themed via the sidebar toggle.

## License

This project is for educational/assignment use only.
