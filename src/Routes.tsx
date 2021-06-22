import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { SimpleFormPage } from './components/pages/SimpleForm'
import { AppProvider } from './state/AppContext'

export const Routes = () => (
  <Router>
    <AppProvider>
      <div>nav</div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/simple-form" exact>
          <SimpleFormPage />
        </Route>
      </Switch>
    </AppProvider>
  </Router>
)
