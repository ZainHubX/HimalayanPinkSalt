import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome (for icons)
import '@fortawesome/fontawesome-free/css/all.min.css'

// Custom Fonts
import '@fontsource/league-spartan/700.css'  // For headings
import '@fontsource/poppins/400.css'         // For body text
import '@fontsource/poppins/600.css'         // For buttons

// Custom CSS
import './assets/css/global.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)