import React, { useState } from "react";
import SearchedContext from "./SearchedContext";
import data from "../data.json";
function SearchedContextProvider({ children }) {
  const [country, setCountry] = useState(null);
  const themeObject = {
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
  };

  return (
    <SearchedContext.Provider
      value={{
        country,
        setCountry,
        data,
        themeObject,
      }}>
      {children}
    </SearchedContext.Provider>
  );
}

export default SearchedContextProvider;
