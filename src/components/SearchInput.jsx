import { useContext } from "react";
import LocationContext from "../context/locationContext";

const SearchInput = () => {
  const { setNewLocation, notFound } = useContext(LocationContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setNewLocation(e.target[0].value);
  };
  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col items-center">
          <div className="p-3 flex justify-center gap-3 mt-1">
            <input
              type="text"
              className="rounded-full bg-transparent border-2 border-white p-2 w-[60%] hover:border-blue-500 placeholder:text-white placeholder:italic focus:outline-none text-white italic"
              placeholder="Enter Location"
            />
            <button
              type="submit"
              className="border-2 rounded-full border-white p-2 text-white hover:bg-black hover:border-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white hover:text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          {notFound && (
            <div className="h-9 w-[90%] rounded-full border-4 italic border-red-800 bg-red-400 text-white flex items-center justify-center">
              <p>{notFound}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
