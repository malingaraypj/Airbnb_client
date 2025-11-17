import { Card, CardContent } from "../ui/card";
import DestinationSearch from "./Search/DestinationSearch";
import GuestSelect from "./Search/GuestSelect";
import TimeSelect from "./Search/TimeSelect";
import { MdOutlineSearch } from "react-icons/md";

function SearchBar() {
  return (
    <Card>
      <CardContent className="flex justify-center items-center bg-white">
        <DestinationSearch />
        <TimeSelect />
        <GuestSelect />
        <div className="cursor-pointer rounded-full bg-red-500 p-3">
          <MdOutlineSearch size={32} className="text-white" />
        </div>
      </CardContent>
    </Card>
  );
}

export default SearchBar;
