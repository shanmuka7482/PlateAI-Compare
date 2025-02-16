import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import "@fontsource-variable/space-grotesk/index.css"
import "@fontsource/inter/index.css"
import "@fontsource/jetbrains-mono/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>
  </StrictMode>,
)
