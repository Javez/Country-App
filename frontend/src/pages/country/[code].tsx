import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const backend_link = process.env.BACKEND_LINK;

type CountryInfo = {
  borders: string[];
  population: { year: number; value: number }[];
  flag: string;
};

export default function CountryInfoPage() {
  const router = useRouter();
  const { code } = router.query;
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);

  useEffect(() => {
    if (code) {
      fetch(`${backend_link}/country/${code}`)
        .then((res) => res.json())
        .then(setCountryInfo);
    }
  }, [code]);

  if (!countryInfo) return <p>Loading...</p>;

  return (
    <div>
      <h1>Country Info</h1>
      <Image
        className="dark:invert"
        src={countryInfo.flag}
        alt="Flag"
        width={100}
      />
      <h2>Borders</h2>
      <ul>
        {countryInfo.borders.map((border) => (
          <li key={border}>{border}</li>
        ))}
      </ul>
      <h2>Population Over Time</h2>
      <ul>
        {countryInfo.population.map((pop, index) => (
          <li key={index}>
            {pop.year}: {pop.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
