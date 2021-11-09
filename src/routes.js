import { Route, Switch } from "react-router-dom";
import Home from "./components/main/home/home";
import PetProfile from "./components/main/rescues/pet_profile";
import Rescue from "./components/main/rescues/rescues";


const Routes = () => (
    <Switch>
      <Route exact path="/rescue" component={Rescue} />
      <Route path="/rescue/:name" component={PetProfile} />
      <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;
