import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Routes.tsx'

import './styles/global.css'
import { SearchOpenProvider } from './context/context.Search.tsx'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchOpenProvider>
      <App />
    </SearchOpenProvider>

  </React.StrictMode>,
)
