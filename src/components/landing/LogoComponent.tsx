import { FaAirbnb } from "react-icons/fa";

function LogoComponent() {
  return (
    <div className="flex items-center gap-2 ">
      <FaAirbnb color="red" size={46} />
      <h1 className="text-red-500 text-2xl font-bold">Airbnb</h1>
    </div>
  );
}

export default LogoComponent;
