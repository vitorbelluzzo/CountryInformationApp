"use client";

import { useEffect, useState } from "react";

interface CountryInfo {
  borders: any[];
  populationData: any[];
  flagURL: string;
}

export default function CountryPage({
  params,
}: {
  params: { name: string; code: string };
}) {
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3560/${params.name}/${params.code}`
        );

        const data = response.json();
        setCountryInfo(await data);
      } catch (error) {
        setError("Error fetching country information");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryInfo();
  }, [params.name, params.code]);

  if (loading == true) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }
}
