import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from './components/Loading.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

const App = lazy(()=>import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <Suspense fallback={<Loading/>}><App/></Suspense>
    </Provider>
  </StrictMode>,
)
