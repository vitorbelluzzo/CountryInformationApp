"use client";

import PopulationChart from "@/app/components/PopulationChart";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CountryInfo {
    borders: BorderCountry[];
    populationData: PopulationData[];
    flagURL: string;
}

interface BorderCountry {
    commonName: string;
    countryCode: string;
}

interface PopulationData {
    year: string;
    value: number;
}

export default function CountryPage() {
    const params = useParams();
    const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const isValidImageURL = (url: string) => {
        if (!url || url.trim() === "") return false;
        const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
        return pattern.test(url);
    };

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const countryName = decodeURIComponent(params.name as string);
                const response = await fetch(
                    `http://localhost:3560/${countryName}/${params.code}`
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
            <div className="flex justify-center items-center h-screen">
                <div
                    className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent "
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
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
        <div className="overflow-x-hidden">
            <h1 className="text-center text-2xl mt-4 font-extralight">
                {params.name} Information
            </h1>

            {countryInfo && (
                <div className="  gap-6 flex flex-col items-center  mt-5">
                    <div className="md:flex flex flex-col  items-center  gap-6 w-fit">

                        <div className="border rounded-xl p-4 ">
                            <h2 className="text-md font-extralight mb-4 text-center">
                                Flag of {params.name}
                            </h2>
                            {isValidImageURL(countryInfo.flagURL) ? (
                                <Image
                                    width={100}
                                    height={100}
                                    src={countryInfo.flagURL}
                                    alt={`Flag of ${params.name}`}
                                    className="w-fit h-40 rounded"
                                />
                            ) : (
                                <div className="w-full h-40 rounded bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-600">Image Not Available</span>
                                </div>
                            )}
                        </div>

                        <div className="border  rounded-lg p-6 w-full  mb-10">
                            <h2 className="text-xl font-semibold mb-4 text-center">Border Countries</h2>
                            <div className="flex flex-wrap  gap-5 w-full ">
                                {countryInfo.borders.map((border: BorderCountry, index: number) => (
                                    <Link
                                        key={index}
                                        href={`/country/${border.commonName}/${border.countryCode}`}
                                    >
                                        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                                            {border.commonName}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="">
                        {countryInfo && countryInfo.populationData ? (
                            <div className="w-full h-full">
                                <PopulationChart data={countryInfo.populationData} />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <p className="text-center text-gray-500">No population data available</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
