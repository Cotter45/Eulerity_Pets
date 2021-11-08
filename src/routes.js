import { Route, Switch } from "react-router-dom";

import Main from "./components/main/main";

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
);

export default Routes;
