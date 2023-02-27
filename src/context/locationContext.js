import { createContext, useEffect, useState } from "react";

import axios from "axios";
let baseUrl = "https://api.openweathermap.org/data/2.5/weather";

let apiKey = process.env.REACT_APP_API_KEY;
//Create context
const LocationContext = createContext();
//Create provider

const LocationProvider = ({ children }) => {
  const [location, setNewLocation] = useState(
    "Moreno, Buenos Aires, Argentina"
  );
  const [locData, setLocData] = useState({});

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const update = async (location) => {
      let queryUrl = `${baseUrl}?q=${location}&APPID=${apiKey}&units=metric`;
      // console.log("url: ", queryUrl);
      try {
        let fetchData = await axios.get(queryUrl);
        // console.log(fetchData.data);
        let dataObj = {
          location: fetchData.data.name,
          country: fetchData.data.sys.country,
          temp: fetchData.data.main.temp,
          type: fetchData.data.weather[0].main,
          feels: fetchData.data.main.feels_like,
          humidity: fetchData.data.main.humidity,
          wspeed: fetchData.data.wind.speed,
        };
        let weatherType = fetchData.data.weather[0].id;
        if (weatherType >= 700 && weatherType < 800) {
          dataObj.type = "Atmosphere";
          dataObj.typeImg = "Atm.jpg";
        }
        //Check type and declare image
        if (dataObj.type !== "Atmosphere") {
          dataObj.typeImg = `${dataObj.type}.jpg`;
        }
        //
        // console.log("test: ", dataObj);
        //
        //clear not found
        setNotFound(false);
        //
        setLocData(dataObj);
      } catch (error) {
        // console.log(error);
        setNotFound("City was not found, enter again please");
      }
    };
    update(location);
  }, [location]);

  const data = {
    location,
    setNewLocation,
    locData,
    setLocData,
    notFound,
    setNotFound,
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export { LocationProvider };
export default LocationContext;
