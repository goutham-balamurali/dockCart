import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'
import ContextProvider from './assets/Hooks/ContextProvider/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </StrictMode>,
)
