import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store.js'
import './Styles/importStyles.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
