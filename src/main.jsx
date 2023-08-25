import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App'
import './utils/styles/index.css';
import { store } from './utils/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
