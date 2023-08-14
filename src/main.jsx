import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App'
import './assets/styles/index.css';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
