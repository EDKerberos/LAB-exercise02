import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './LABex02style.css'
import SinglePage from './LABex02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SinglePage />
  </StrictMode>,
)
