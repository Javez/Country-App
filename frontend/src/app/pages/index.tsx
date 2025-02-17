import Link from 'next/link';
import { useEffect, useState } from 'react';

const backend_link = process.env.BACKEND_LINK;

type Country = {
  countryCode: string;
  name: string;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (!backend_link) throw new Error('no backend link');
    fetch(backend_link)
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/country/${country.countryCode}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
