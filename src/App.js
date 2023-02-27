import Display from "./layouts/Display";
// import useApi from "./hooks/useApi";
import { LocationProvider } from "./context/locationContext";

//
function App() {
  // const { locData } = useContext(LocationContext);
  // console.log(locData);
  return (
    <>
      <LocationProvider>
        <div className="">
          <div id="container" className="relative w-full flex justify-center">
            <Display />
          </div>
        </div>
      </LocationProvider>
    </>
  );
}

export default App;
