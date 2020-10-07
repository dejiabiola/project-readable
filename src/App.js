import React from "react";
import { Route, Switch } from 'react-router-dom'
import appRoutes from './routes/routes'
import AppStyles from "./AppStyles.styles.tw";

const App = () => {
  const { login, home, cartegory, newPost, postDetail } = appRoutes
  return (
    <AppStyles>
      <Switch>
        <Route path={home.path} component={home.component} exact />
        <Route path={login.path} component={login.component} exact />
        <Route path={cartegory.path} component={cartegory.component} />
        <Route path={postDetail.path} component={postDetail.component} />
        <Route path={newPost.path} component={newPost.component} exact />
      </Switch>
    </AppStyles>
  );
};

export default App;