"use client";

import { useEffect, useState } from "react";

interface CountryInfo {
  borders: any[];
  populationData: any[];
  flagURL: string;
}

export default function CountryPage({ params }: { params: { name: string; code: string } }) {
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3560/${params.name}/${params.code}`
        );
        const data = await response.json();
        setCountryInfo(data);
      } catch (err) {
        setError("Error fetching country information");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [params.name, params.code]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">{params.name}</h1>
      
      {countryInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flag Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Flag</h2>
            <img 
              src={countryInfo.flagURL} 
              alt={`Flag of ${params.name}`}
              className="w-full h-auto rounded"
            />
          </div>

          {/* Population Data Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Population History</h2>
            <div className="space-y-2">
              {countryInfo.populationData.map((data: any, index: number) => (
                <div key={index} className="flex justify-between">
                  <span>{data.year}</span>
                  <span>{data.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Border Countries Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Border Countries</h2>
            <div className="flex flex-wrap gap-4">
              {countryInfo.borders.map((border: any, index: number) => (
                <span 
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-full"
                >
                  {border.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}