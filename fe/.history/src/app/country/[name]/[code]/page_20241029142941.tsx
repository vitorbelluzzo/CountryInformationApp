"use client";

import { useEffect } from "react";

export default function CountryPage({ params }: {params: {name: string; code: string}}) {
    useEffect(() => {
        const findCountries = async () => {
            const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState<string | null>(null);
            try {
                const response = await fetch(`http://localhost:3560/${params.name}/${params.code}`")
            } catch (error) {
                
            }
        }
    })
}