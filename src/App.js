import React from "react";
import { Route, Switch } from 'react-router-dom'
import appRoutes from './routes/routes'
import AppStyles from "./AppStyles.styles.tw";

const App = () => {
  const { login, home, cartegory } = appRoutes
  return (
    <AppStyles>
      <Switch>
        <Route path={home.path} component={home.component} exact />
        <Route path={login.path} component={login.component} exact />
        <Route path={cartegory.path} component={cartegory.component} />
      </Switch>
    </AppStyles>
  );
};

export default App;