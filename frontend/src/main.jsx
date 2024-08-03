import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'  //A tool that helps manage different pages in the app without reloading the whole page
import StoreContextProvider from './context/StoreContext.jsx'  //A custom component that provides a way to share data across the entire app.

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App/>
    </StoreContextProvider>
  </BrowserRouter>
)
