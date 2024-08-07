'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  MingcuteGithub2Fill,
  SearchStatusIcon,
  TablerExternalLink,
} from './components/Icons';
import { services } from './data/service';

const WithGradient = styled.div`
  background-image: url('/main-banner.png');
  background-size: cover;
  padding: 5rem 0;
  color: white;
  margin-bottom: 4rem;
  text-align: center;
  box-shadow: 0 20px 10px #aaaaaa3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  display: grid;
`;

const StyledInput = styled.input`
  background-color: #00000000;
  color: white;
  outline: none;
  border-bottom: 2px solid #ffffff;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export default function Home() {
  const [search, setSearch] = useState<string>('');

  const onInput = useCallback((e: any) => {
    setSearch(e.target.value);
  }, []);

  return (
    <StyledMain>
      <WithGradient>
        <div className="mb-2">
          <MingcuteGithub2Fill scope={22} />
        </div>
        <h1 className="text-3xl font-semibold">GSMAN</h1>
        <p>소마고 프로젝트 모음</p>
        <SearchContainer>
          <StyledInput
            onInput={onInput}
            className="p-2 sm:w-[25rem] w-[20rem] text-white"
          />
          <div className="absolute right-2">
            <SearchStatusIcon scope={25} />
          </div>
        </SearchContainer>
      </WithGradient>
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
              <div className="flex items-center">
                <div className="flex items-end gap-x-1">
                  <h1 className="font-semibold text-2xl text-neutral-700">
                    {service.name}
                  </h1>
                  <h1 className=" text-lg font-semibold text-neutral-500">
                    {'by ' + service.group}
                  </h1>
                </div>
                <div className="ml-auto">
                  <TablerExternalLink scope={22} />
                </div>
              </div>
              <h2 className="text-neutral-600">{service.description}</h2>
              <div className="mt-3">
                <Link
                  className="border-b border-b-neutral-300 text-neutral-700 hover:border-b-neutral-600"
                  href={`/${service.id}`}
                >
                  프로젝트 정보
                </Link>
              </div>
            </Link>
          ))}
      </div>
    </StyledMain>
  );
}
