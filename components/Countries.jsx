import Countrycard from "./Countrycard";

import data from "../data.json";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import SearchedContext from "@/context/SearchedContext";
import Selectedcountry from "./Selectedcountry";

function Countries() {
  const router = useRouter();

  const { country } = useContext(SearchedContext);

  return (
    <div className={`grid sm:grid-cols-4 w-[80%] m-auto gap-6 mt-5 `}>
      {data
        .slice(0, 20)
        .map((data) =>
          !data ? (
            <h1 key={data.name}>LOADING...</h1>
          ) : (
            <Countrycard data={data} key={data.name} />
          )
        )}
    </div>
  );
}

export default Countries;
