import { useEffect } from "react";
import { useState } from "react";
import IndividualCountry from "./IndividualCountry";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };
    loadCountries();
  }, []);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleCountriesVisited = (visited) => {
    const newVisitedCountries = [...visitedCountries, visited];
    setVisitedCountries(newVisitedCountries);
  };
  const [visitedCountryFlags, setVisitedCountryFlags] = useState([]);
  const handleVisitedCountryFlags = (flags) => {
    const newVisitedFlags = [...visitedCountryFlags, flags];
    setVisitedCountryFlags(newVisitedFlags);
  }
  return (
    <div>
      <p className="text-2xl">
        Countries : <span className="text-orange-400">{countries.length}</span>
      </p>
      <p className="text-2xl">
        Visited Countries :{" "}
        <span className="text-purple-400">{visitedCountries.length}</span>
      </p>
      <ul className="w-[80%] mx-auto flex flex-wrap gap-1 py-5 overflow-y-auto h-[20vh]">
        {visitedCountries.map((visited) => (
          <li key={visited.name.common} className="text-zinc-200 font-semibold">
            {visited.name.common},
          </li>
        ))}
      </ul>
      <div className="grid gap-2 grid-cols-3">
        <div className="grid col-span-2 grid-cols-1 lg:grid-cols-2 gap-2">
        {countries.map((country) => (
          <IndividualCountry
            data={country}
            func={handleCountriesVisited}
            func2={handleVisitedCountryFlags}
            key={country}
          />
        ))}
        </div>
        <div className="sticky top-3 h-screen lg:grid-cols-2 gap-3 overflow-y-auto p-3">
        {visitedCountryFlags.map( flag => (
          <div key={Math.random()} className="m-1 mx-auto">
            <img src={flag.flags.png} alt="" className="rounded-lg mx-auto"/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
