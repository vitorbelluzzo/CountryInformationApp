"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface CountryProps {
  countryCode: string;
  name: string;
}
export default function Home() {
  const [countries, setCountries] = useState<CountryProps[]>([]);

  useEffect(() => {
    const findCountries = async () => {
      try {
        const response = await fetch(
          "http://localhost:3560/AvailableCountries"
        );

        const data = await response.json();

        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.log("Data fetched is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    findCountries();
  }, []);

  return (
    <div>
      <div className="flex gap-5 flex-wrap justify-center  h-screen py-10">
        {countries.map((country) => {
          return (
            <Link>
              {" "}
              //http://localhost:3560/Brazil/BR
              <div
                key={country.countryCode}
                className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-zinc-200 shadow-xl transition duration-300 hover:scale-105"
              >
                <div className="flex h-full flex-col justify-center items-center ">
                  <span className="font-bold text-zinc-900">
                    {country.name}
                  </span>
                  <span className="font-bold text-zinc-900 ">
                    {country.countryCode}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
