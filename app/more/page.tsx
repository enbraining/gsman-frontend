'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { TablerExternalLink } from '../components/Icons';
import { services } from '../data/service';

export default function Page() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const onInput = useCallback((e: any) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className="grid mx-auto w-5/6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services
        .filter((service) =>
          `${service.name}${service.group}${service.description}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        )
        .map((service) => (
          <Link
            href={service.siteUrl}
            className="border rounded-xl px-4 py-3 bg-neutral-50 shadow-md shadow-neutral-200"
            key={service.id}
          >
            <div className="flex">
              <div>
                <div className="flex items-end gap-x-1">
                  <h1 className="font-semibold text-2xl text-neutral-700">
                    {service.name}
                  </h1>
                  <h1 className=" text-lg font-semibold text-neutral-500">
                    {'by ' + service.group}
                  </h1>
                </div>
                <h2 className="text-neutral-600 mb-2">{service.description}</h2>
                <Link
                  href={service.id}
                  className="inline duration-300 border-dashed border-b border-b-neutral-300 text-neutral-700 hover:border-b-neutral-600"
                >
                  프로젝트 정보
                </Link>
              </div>
              <div className="ml-auto">
                <TablerExternalLink scope={22} />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
