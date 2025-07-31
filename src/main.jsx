import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx';
import { AuthProvider } from '../src/components/Authcontext.jsx'




createRoot(document.getElementById('root')).render(
<Provider store={store}>
<AuthProvider>
 <BrowserRouter>
    <App />
 </BrowserRouter>
 </AuthProvider>
</Provider>  
)
