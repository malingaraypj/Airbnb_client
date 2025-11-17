export default function DestinationSearch() {
  return (
    <div className="rounded-4xl border p-5 gap-2 hover:bg-gray-50 cursor-pointer">
      <p>Where</p>
      <input
        className="border-none outline-none bg-transparent"
        placeholder="Search destinations"
      />
    </div>
  );
}
