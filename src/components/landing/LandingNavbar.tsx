import LogoComponent from "./LogoComponent";
import SearchBar from "./searchBar";
import { VscThreeBars } from "react-icons/vsc";

function LandingNavbar() {
  return (
    <div className="m-0 bg-amber-50 p-5 w-full border flex justify-between items-start">
      {/* Logo Section */}
      <div className="w-[20%]">
        <LogoComponent />
      </div>
      <div className="w-[60%]">
        <SearchBar />
      </div>
      <div className="w-[20%] p-5 flex gap-3">
        <h1>Become host</h1>
        <VscThreeBars size={24} />
        <VscThreeBars size={24} />
      </div>
    </div>
  );
}

export default LandingNavbar;
