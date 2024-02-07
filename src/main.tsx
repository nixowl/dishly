import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className="flex flex-col h-full">
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
