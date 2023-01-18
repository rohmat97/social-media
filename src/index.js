import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </HashRouter>
  </React.StrictMode>
);
