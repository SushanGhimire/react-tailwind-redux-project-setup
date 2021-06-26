import { Route, Switch } from "react-router";
import Home from "./Home/Home";
function DashboardManagement() {
  return (
    <div className="bg-white h-screen flex font-rubik relative">
      <div className="flex-1 flex flex-col overflow-auto">
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/dashboard/" component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashboardManagement;
