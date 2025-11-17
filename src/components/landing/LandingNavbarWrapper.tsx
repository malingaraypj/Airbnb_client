import { Outlet } from "react-router";
import LandingNavbar from "./LandingNavbar";

function LandingNavbarWrapper() {
  return (
    <div>
      <LandingNavbar />
      <Outlet />
    </div>
  );
}

export default LandingNavbarWrapper;
