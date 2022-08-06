import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const YcodeInfo = {
  name: "Ycode",
  age: 24,
};

const YcodeContext = createContext(YcodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <YcodeContext.Provider value={YcodeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </YcodeContext.Provider>
)

export default YcodeContext;