import { Card, CardContent } from "../ui/card";
import DestinationSearch from "./Search/DestinationSearch";
import GuestSelect from "./Search/GuestSelect";
import TimeSelect from "./Search/TimeSelect";
import { MdOutlineSearch } from "react-icons/md";

//images path
import servicesImg from "@/assets/landing/services.png";
import experiencesImg from "@/assets/landing/experience.png";
import homesImg from "@/assets/landing/home.png";

function SearchBar() {
  return (
    <Card className="py-2">
      <CardContent className="flex justify-center gap-10 items-center">
        <div className="flex items-center gap-2">
          <img src={homesImg} width={60} alt="home image" />
          <p>Homes</p>
        </div>
        <div className="flex items-center">
          <img src={experiencesImg} width={55} alt="exp image" />
          <p>Experiences</p>
        </div>
        <div className="flex items-center">
          <img src={servicesImg} width={60} alt="service image" />
          <p>Services</p>
        </div>
      </CardContent>
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
