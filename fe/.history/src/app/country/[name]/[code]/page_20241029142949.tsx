"use client";

import { useEffect, useState } from "react";

export default function CountryPage({ params }: {params: {name: string; code: string}}) {
    const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const findCountries = async () => {
            
            try {
                const response = await fetch(`http://localhost:3560/${params.name}/${params.code}`")
            } catch (error) {
                
            }
        }
    })
}