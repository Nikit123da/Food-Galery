import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Gallery from './components/food/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
)
