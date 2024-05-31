const BentoGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid auto-rows-[192px] grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-1 md:col-span-2" : ""
            }`}
          >
            hELLO
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
