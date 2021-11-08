import { Route, Switch } from "react-router-dom";

import Home from "./components/main/home/home";

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;
