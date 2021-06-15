import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Template from './layout/template'
import history from './utils/history'
import './sass/index.sass'
import store from './redux/store'

function App() {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route exact path='/' component={ Template } />
      </Router>
    </Provider>
  );
}

export default App;