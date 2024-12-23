import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import './index.css'
import App from './App.jsx'
import store from "./app/Store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer 
   bodyClassName="toastBody"
   />
    </Provider>
  </StrictMode>,
)
