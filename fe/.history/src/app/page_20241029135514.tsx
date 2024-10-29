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
      <p className="text-center">hello world</p>
      <div class="flex gap-8 flex-wrap justify-center bg-gray-300 h-screen py-10">
    <div
        class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-gray-500">Scale</span>
        </div>
    </div>

    <div
        class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-180">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-green-600">Rotate</span>
        </div>
    </div>

    <div
        class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-amber-500">Translate</span>
        </div>
    </div>
</div>
    </div>
  );
}
