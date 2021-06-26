import { Switch, Route } from "react-router-dom";
import App from "./App";
import DashboardManagement from "./components/dashboard/Dashboard-Management";
// import LoadingPage from "./common/LoadingPage";
function UrlDasWebmgnr() {
  const loggedIn = true;

  return (
    <div className="relative">
      <Switch>
        {loggedIn && (
          <Route path="/dashboard" component={DashboardManagement} />
        )}
        <Route
          path="/"
          render={(props) => <App loggedIn={loggedIn} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default UrlDasWebmgnr;
