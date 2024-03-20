import Image from "next/image";

function Countrycard({ data }) {
  return (
    <div className="h-[300px] w-[100%] bg-white shadow-sm rounded-sm">
      {/* {data.map((city) => console.log(city.name))} */}
      <Image
        src={data.flag}
        width={300}
        height={50}
        alt="flag"
        className="object-contain w-full h-[150px]"
      />
      <article className="ml-3 w-full">
        <h1 className="font-bold my-2">{data.name}</h1>
        <p>Poulation:{data.population}</p>
        <p>Region:{data.region}</p>
        <p>Capital:{data.capital}</p>
      </article>
    </div>
  );
}

export default Countrycard;
