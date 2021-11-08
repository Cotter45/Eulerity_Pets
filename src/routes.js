import { Route, Switch } from "react-router-dom";
import Home from "./components/main/home/home";
import Rescue from "./components/main/rescues/rescues";


const Routes = () => (
    <Switch>
      <Route path="/rescue/:name" component={Rescue} />
      <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;
