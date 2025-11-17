function GuestSelect() {
  return (
    <div className="rounded-4xl border p-5 gap-2 hover:bg-gray-50 cursor-pointer">
      <p>Who</p>
      <input
        className="border-none outline-none bg-transparent"
        placeholder="Add guests"
      />
    </div>
  );
}

export default GuestSelect;
