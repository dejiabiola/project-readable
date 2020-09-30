import React from "react";
import { Route, Switch } from 'react-router-dom'
import appRoutes from './routes/routes'
import AppStyles from "./AppStyles.styles.tw";

const App = () => {
  return (
    <AppStyles>
      <Switch>
        {/* <Route path='/' component={Home} /> */}
        <Route path={appRoutes.login.path} component={appRoutes.login.component} exact />
      </Switch>
    </AppStyles>
  );
};

export default App;