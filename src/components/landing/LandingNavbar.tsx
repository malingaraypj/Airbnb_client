import LogoComponent from "./LogoComponent";
import SearchBar from "./searchBar"; // Ensure this path is correct

function LandingNavbar() {
  return (
    <div className="m-0 bg-amber-50 p-5 w-full border flex justify-between items-center">
      {/* Logo Section */}
      <div className="w-[30%]">
        <LogoComponent />
      </div>
      <div className="w-[70%] py-2 h-[100px]">
        <SearchBar />
      </div>
    </div>
  );
}

export default LandingNavbar;
