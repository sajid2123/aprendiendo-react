import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
/*
const Button = ({text}) => {
  return (
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    {text}
  </button>
  )
}*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)

