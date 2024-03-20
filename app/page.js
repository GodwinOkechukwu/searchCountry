"use client";
import { useState } from "react";
import Countries from "@/components/Countries";
import SearchfilterContainer from "@/components/SearchfilterContainer";
import SearchedContextProvider from "@/context/SearchedContextProvider";

export default function Home() {
  // console.log(data[1].name);
  const [loading, setLoading] = useState(false);

  return (
    <div className="mt-5 w-full">
      <SearchfilterContainer />
      <Countries />
    </div>
  );
}
