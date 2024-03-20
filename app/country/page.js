"use client";
import Searchbar from "@/components/Searchbar";
import Selectedcountry from "@/components/Selectedcountry";
import SearchedContextProvider from "@/context/SearchedContextProvider";

function page() {
  return (
    <SearchedContextProvider>
      <div className="bg-slate-50 w-full mt-12 h-[900px] md:h-[700px]">
        <Searchbar />
        <Selectedcountry />
      </div>
    </SearchedContextProvider>
  );
}

export default page;
