const Bottom = ({ data }) => {
  return (
    <div className="w-full bg-zinc-800/60 rounded-xl h-[100px] min-w-[315px] p-1 text-white flex justify-around">
      <div className="text-lg md:text-xl flex flex-col justify-center items-center">
        <div>Feels like</div>
        <div className="text-2xl sm:text-4xl">{data ? data.feels : ""}°C</div>
      </div>
      <div className="text-lg md:text-xl flex flex-col justify-center items-center">
        <div>Humidity</div>
        <div className="text-2xl sm:text-4xl">{data ? data.humidity : ""}%</div>
      </div>
      <div className="text-lg md:text-xl flex flex-col justify-center items-center">
        <div>Wind Speed</div>
        <div className="text-2xl sm:text-4xl uppercase">
          {data ? data.wspeed : ""} MPH
        </div>
      </div>
    </div>
  );
};

export default Bottom;
