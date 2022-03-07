import { Route, Routes } from "react-router";
import Error404 from "../common/Error404";
import Home from "./Home/Home";
function DashboardManagement() {
  return (
    <div className="bg-white h-screen flex font-rubik relative">
      <div className="flex-1 flex flex-col overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardManagement;
