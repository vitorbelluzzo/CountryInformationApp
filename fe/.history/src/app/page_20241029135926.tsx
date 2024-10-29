// import { useEffect, useState } from "react";

// interface CountryProps {
//   countryCode: string;
//   name: string;
// }
export default function Home() {
  // const [countries, setCountries] = useState<CountryProps[]>([]);

  // useEffect(() => {
  //   const findCountries = async () => {
  //     const response = await fetch("http://localhost:3560/AvailableCountries");

  //     const data = response.json();

  //     if (Array.isArray(data)) {
  //       setCountries(data);
  //     } else {
  //       console.log("Data fetched is not an array", data);
  //     }
  //   };
  //   findCountries();
  // }, []);

  return (
    <div>
      <div className="flex gap-8 flex-wrap justify-center  h-screen py-10">
        
        {countries.map((country) => {
          return (
            <div className="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-zinc-200 shadow-xl transition duration-300 hover:scale-105">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-zinc-900">{country.name}</span>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  );
}
