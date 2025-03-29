# Gen AI Analytics Dashboard

A modern, responsive dashboard for natural language data queries and visualization.

## Features

- Natural language query input with AI-powered suggestions
- Real-time query processing simulation
- Interactive data visualization
- Query history tracking
- Responsive design for all screen sizes
- Redux state management
- Modern UI with Tailwind CSS

## Tech Stack

- React.js
- Redux Toolkit for state management
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gen-ai-dashboard.git
cd gen-ai-dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── QueryInput.jsx
│   ├── QueryHistory.jsx
│   └── ResultsDisplay.jsx
├── store/
│   ├── store.js
│   └── querySlice.js
├── App.jsx
└── main.jsx
```

## Features in Detail

### Query Input
- Natural language input field
- AI-powered query suggestions
- Real-time filtering of suggestions
- Form validation

### Query History
- Chronological list of past queries
- Status indicators (completed, error, processing)
- Timestamp display
- Clickable history items

### Results Display
- Loading states with animations
- Error handling and display
- Interactive data visualization
- Responsive layout

## State Management

The application uses Redux Toolkit for state management, with the following structure:

```javascript
{
  query: {
    queries: [],
    currentQuery: null, 
    isProcessing: false,
    results: null, 
    error: null 
  }
}
```


