import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client'

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

