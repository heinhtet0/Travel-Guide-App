import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <FavoritesProvider>
        <App />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: '12px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </FavoritesProvider>
    </ThemeProvider>
  </BrowserRouter>
)
