import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseEffectAdvanced from './UseEffectCleanup.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseEffectAdvanced />
    <App />
  </React.StrictMode>,
)
