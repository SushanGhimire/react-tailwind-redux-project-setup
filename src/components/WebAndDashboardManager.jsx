import { Routes, Route } from "react-router-dom";
import App from "./App";
import DashboardManagement from "./dashboard/DashboardManagement";
import Error404 from "./common/Error404";

function UrlDasWebmgnr() {
  const loggedIn = true;

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<App loggedIn={loggedIn} />} />
        {loggedIn && (
          <Route path="/dashboard/*" element={<DashboardManagement />} />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default UrlDasWebmgnr;
