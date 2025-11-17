function TimeSelect() {
  return (
    <div className="rounded-4xl border px-5 py-2 gap-2 hover:bg-gray-50 cursor-pointer">
      <p>When</p>
      <input
        className="border-none outline-none bg-transparent"
        placeholder="Add dates"
      />
    </div>
  );
}

export default TimeSelect;
