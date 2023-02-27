import SearchInput from "../components/SearchInput";

const Display = () => {
  let data = {
    location: "Buenos Aires",
    temp: "32°C",
    type: "Cloud",
    feels: "380°C",
    type: "Cloud",
    humidity: "25%",
    wspeed: "12 mph",
  };
  return (
    <>
      <div
        className="w-screen h-screen absolute z-0"
        style={{
          backgroundImage: `url(/assets/cloudy.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute w-screen h-screen bg-black z-10 opacity-20"></div>
      <div id="apppp" className="w-[90%] h-screen relative z-50">
        <div className="w-full absolute top-1">
          <SearchInput />
        </div>
        <div className="w-full absolute top-[18%]">
          no se encontro natalia gimenez
        </div>
      </div>
    </>
  );
};

export default Display;
