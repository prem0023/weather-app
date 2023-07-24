import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import City from "./components/City";
import WeatherReport from "./components/WeatherReport";
import { useState } from "react";
import LocationContext from "./components/LocationContext";

const AppLayout = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });

  const [place, setPlace] = useState(["Kolkata", "IN"]);
  return (
    <LocationContext.Provider
      value={{
        location: location,
        setLocation: setLocation,
        place: place,
        setPlace: setPlace,
      }}
    >
      <Home />
      <div className="w-1/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Outlet />
      </div>
    </LocationContext.Provider>
  );
};

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <City />,
      },
      {
        path: "/weather-report",
        element: <WeatherReport />,
      },
    ],
  },
]);

export default App;
