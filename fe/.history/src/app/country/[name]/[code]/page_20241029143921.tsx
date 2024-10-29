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
    const findCountries = async () => {
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
  });
}
