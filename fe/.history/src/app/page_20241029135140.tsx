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
      <div className="border h-auto w-auto text-start">teste</div>
    </div>
  );
}
