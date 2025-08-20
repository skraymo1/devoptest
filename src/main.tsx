import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', padding: 24 }}>
      <h1>Hello, Azure App Service 👋</h1>
      <p>This is a minimal React + Vite app.</p>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
