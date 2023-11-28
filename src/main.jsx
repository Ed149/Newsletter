import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/styles.css'
import { NewsLetterApp } from '/src/NewsLetterApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsLetterApp />
  </React.StrictMode>,
)
