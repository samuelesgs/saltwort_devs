import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DevelopersApp } from './DevelopersApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevelopersApp />
  </StrictMode>,
)
