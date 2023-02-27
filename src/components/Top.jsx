const Top = ({ data }) => {
  return (
    <div className="w-full relative h-[170px] min-w-[315px] p-2 text-white">
      <div className="capitalize text-xl md:text-xl drop-shadow-lg mb-1">
        {data ? data.location : ""}, {data ? data.country : ""}
      </div>
      <div className="capitalize text-7xl md:text-8xl font-extrabold drop-shadow-2xl">
        {data ? Math.ceil(data.temp) : ""}°C
      </div>
      <div className="absolute capitalize text-xl md:text-2xl -rotate-90 bottom-3 right-0">
        {data ? data.type : ""}
      </div>
    </div>
  );
};

export default Top;
