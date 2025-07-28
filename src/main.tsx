import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// 1. تم استبدال BrowserRouter بـ HashRouter هنا
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. تم استخدام HashRouter هنا أيضًا */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)