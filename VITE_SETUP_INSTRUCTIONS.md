# Vite Setup Instructions - Manual Fix

The npm install is having issues due to corrupted node_modules. Here's how to fix it:

## Step 1: Clean Installation

1. **Close all terminals and VS Code**
2. **Delete these folders/files manually:**
   - Delete `node_modules` folder
   - Delete `package-lock.json` file

## Step 2: Install Dependencies

Open a new terminal and run these commands one by one:

```bash
# Install core Vite packages first
npm install vite @vitejs/plugin-react --save-dev

# Install React
npm install react react-dom react-router-dom

# Test if basic setup works
npm run dev
```

If the basic setup works, then install the remaining dependencies:

```bash
# Install UI and styling packages
npm install bootstrap animate.css

# Install chart and data visualization
npm install apexcharts react-apexcharts jsvectormap

# Install form and UI components
npm install react-quill react-datepicker react-toastify react-modal-video

# Install drag and drop
npm install @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @hello-pangea/dnd

# Install calendar
npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/react @fullcalendar/timegrid

# Install remaining packages
npm install @phosphor-icons/react @popperjs/core @ramonak/react-progress-bar datatables.net datatables.net-dt flatpickr highlight.js isotope-layout jquery react-beautiful-dnd react-bootstrap react-fast-marquee react-scroll-to-top react-slick react-slider slick-carousel uuid web-vitals wowjs @iconify/react sass
```

## Step 3: Update main.jsx

After all packages are installed, update `src/main.jsx` to include all the CSS imports:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import 'react-quill/dist/quill.snow.css';
import "jsvectormap/dist/css/jsvectormap.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Step 4: Test the Application

```bash
npm run dev
```

## Alternative: Use Yarn

If npm continues to have issues, try using Yarn:

```bash
# Install Yarn globally (if not already installed)
npm install -g yarn

# Delete package-lock.json and node_modules
# Then use yarn instead
yarn install
yarn dev
```

## What's Already Done:

✅ **Vite Configuration**: `vite.config.js` is ready
✅ **HTML Template**: `index.html` moved to root with Vite script tag  
✅ **Entry Point**: `src/main.jsx` created (Vite convention)
✅ **Package Scripts**: Updated to use Vite commands (`dev`, `build`, `preview`)

The migration is complete - you just need to get the dependencies installed properly!