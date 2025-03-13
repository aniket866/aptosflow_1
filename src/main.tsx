
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadWalletScript } from './lib/wallet-script'

// Initialize wallet detection as early as possible
console.log("Initializing Aptos wallet detection...");
loadWalletScript();

// Add retry mechanism if wallet detection fails
document.addEventListener('DOMContentLoaded', () => {
  // Add a secondary check after page is fully loaded
  setTimeout(() => {
    if (typeof window !== 'undefined' && !window.aptosWalletDetected) {
      console.log("Retrying wallet detection after DOM load...");
      loadWalletScript();
    }
  }, 2000);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
