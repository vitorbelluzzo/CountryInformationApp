"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CountryInfo {
    borders: string[];
    populationData: string[];
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

    if (loading) {
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

    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-center text-xl mt-4 font-extralight">
                {params.name} Informations
            </h1>

            {countryInfo && (
                <div className="md:flex grid gap-3 justify-center mt-5 space-x-4">
                    <div className="gap-3 flex flex-col">
                        <div className="flex flex-col border rounded-xl h-fit p-4 max-w-xs">
                            <h2 className="text-md font-extralight mb-4 text-center">
                                Flag of {params.name}
                            </h2>
                            <Image
                                width={100}
                                height={100}
                                src={countryInfo.flagURL}
                                alt={`Flag of ${params.name}`}
                                className="w-40 h-40 rounded"
                            />
                        </div>
                        <div className=" rounded-lg border p-6 md:col-span-2">
                            <h2 className="text-xl font-semibold mb-4">Border Countries</h2>
                            <div className="flex flex-wrap gap-4 flex-col ">
                                {countryInfo.borders.map((border: any, index: number) => (
                                    <Link
                                    key={country.countryCode}
                                    href={`/country/${country.name}/${country.countryCode}`}
                                  >
                                   <span
                                        key={index}
                                        className="bg-gray-100 px-4 py-2 rounded-full "
                                    >
                                        {border.commonName}
                                    </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col border rounded-xl p-4 max-w-xs">
                        <h2 className="text-center mb-4">Population History of {params.name}</h2>
                        {countryInfo.populationData.map((info: string, index: number) => (
                            <div key={index} className="flex justify-between gap-36 ">
                                <span>{info.year}</span>
                                <span>{info.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
