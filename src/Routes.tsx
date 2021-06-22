import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FormWithStaticDefaultValuesPage } from './components/pages/FormWithStaticDefaultValues'
import { FormWithAsyncDefaultValuesPage } from './components/pages/FormWithAsyncDefaultValues'
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
        <Route path="/form-with-static-default-values" exact>
          <FormWithStaticDefaultValuesPage />
        </Route>
        <Route path="/form-with-async-default-values" exact>
          <FormWithAsyncDefaultValuesPage />
        </Route>
      </Switch>
    </AppProvider>
  </Router>
)
