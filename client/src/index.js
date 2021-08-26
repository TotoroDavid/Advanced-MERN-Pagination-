import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//styles
import './styles.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/page/:pageNumber' component={App} />
      <Route exact path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
