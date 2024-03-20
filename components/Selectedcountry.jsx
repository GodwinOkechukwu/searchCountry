import SearchedContext from "@/context/SearchedContext";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

function Selectedcountry() {
  const { country, Setcountry, data } = useContext(SearchedContext);
  const searched = data.find((data) => data.name === country);

  return (
    <div className="w-[80%] m-auto mt-11 ">
      {searched ? (
        <div className=" md:flex gap-[100px] md:justify-between w-full mb-6">
          <Image
            src={searched.flag}
            width={400}
            height={400}
            alt="flag"
            className="object-contain  "
          />
          <article className="ml-3 w-full md:flex gap-8 items-center">
            <div className="space-y-[10px]">
              <h1 className="font-bold my-2 md:text-4xl">{searched.name}</h1>
              <p>
                <span className="font-bold pr-2">Native Name</span>:
                {searched.nativeName}
              </p>
              <p>
                <span className="font-bold pr-2">Poulation</span>:
                {new Intl.NumberFormat().format(searched.population)}
              </p>
              <p>
                <span className="font-bold pr-2">Region</span>:{searched.region}
              </p>
              <p>
                <span className="font-bold pr-2">Capital</span>:
                {searched.capital}
              </p>
              <p>
                <span className="font-bold pr-2">Sub Region</span>:
                {searched.subregion}
              </p>
            </div>
            <div className="space-y-[10px] mt-6">
              <p>
                <span className="font-bold pr-2">Top level domain</span>:
                {searched.topLevelDomain}
              </p>
              <p>
                <span className="font-bold pr-2">Currencies</span>:
                {searched.currencies[0].name}
              </p>
              <p>
                <span className="font-bold pr-2">Languages</span>:
                {searched.languages[0].name}
              </p>
            </div>
          </article>

          <Link
            className="w-[200px] m-auto absolute bottom-10 md:bottom-14 border rounded-sm bg-gray px-6 py-2 mt-10 hover:bg-gray-200"
            href="/">
            Go back
          </Link>
        </div>
      ) : (
        <div className="mb-10">
          <h1>
            Oooops!! could not find country, please check spelling or try
            searching for another country
          </h1>
        </div>
      )}
    </div>
  );
}

export default Selectedcountry;
