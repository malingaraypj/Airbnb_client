import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import nearByImg from "@/assets/landing/nearBy.png";
import suggestionImg from "@/assets/landing/tour.png";

export default function DestinationSearch() {
  return (
    <div className="rounded-4xl border px-5 py-2 gap-2 hover:bg-gray-50 cursor-pointer">
      <p>Where</p>
      <Suggestions />
    </div>
  );
}

function Suggestions() {
  return (
    <Popover>
      <PopoverTrigger>
        <input
          className="border-none outline-none bg-transparent"
          placeholder="Search destinations"
        />
      </PopoverTrigger>
      <PopoverContent className="w-100 mt-5 shadow-2xl">
        <h1>suggested destinations</h1>
        <div className="max-h-52 w-full space-y-3 overflow-y-auto no-scrollbar my-3">
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function SuggestionCard() {
  return (
    <div className="flex justify-around items-center p-2 bg-stone-100 rounded-lg">
      <div>
        <img src={suggestionImg} width={80} height={80} alt="" />
      </div>
      <div>
        <h1 className="font-bold">Puducheri, puducheri</h1>
        <p>Popular beach destinations</p>
      </div>
    </div>
  );
}
