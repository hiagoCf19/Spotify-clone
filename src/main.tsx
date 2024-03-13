import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Routes.tsx'

import './styles/global.css'
import { SearchOpenProvider } from './context/context.Search.tsx'
import { ReproducingProvider } from './context/context.Playing.tsx'
import { LikedProvider } from './context/context.Likeds.tsx'






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LikedProvider>
      <ReproducingProvider>
        <SearchOpenProvider>
          <App />
        </SearchOpenProvider>
      </ReproducingProvider>
    </LikedProvider>



  </React.StrictMode>,
)
