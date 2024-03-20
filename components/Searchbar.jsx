import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import data from "../data.json";
import SearchedContext from "@/context/SearchedContext";

function Searchbar() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { setCountry, country } = useContext(SearchedContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("please fill in the search bar");
    }

    setCountry(input[0].toUpperCase() + input.slice(1));
    router.push("/country");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] bg-white shadow-lg rounded-sm h-[50px] flex items-center m-auto md:w-[450px]">
      <button onClick={handleSubmit}>
        <Image
          src="/search.svg"
          width={20}
          height={20}
          alt="searchIcon"
          className="ml-3"
        />
      </button>

      <input
        type="text"
        value={input}
        className="w-full placeholder:pl-6 h-full  focus:outline-none"
        placeholder="search for a country... e.g Zambia"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Searchbar;
