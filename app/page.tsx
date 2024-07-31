"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import {
  MdiWeb,
  MingcuteGithub2Fill,
  SearchStatusIcon,
} from "./components/icons";
import { services } from "./data/service";

const WithGradient = styled.div`
  background-image: url("/main-banner.png");
  background-size: cover;
  padding: 9rem 0 5rem 0;
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
  const [search, setSearch] = useState<string>("");

  const onInput = useCallback((e: any) => {
    setSearch(e.target.value);
  }, []);

  return (
    <StyledMain>
      <WithGradient>
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
              .includes(search.toLowerCase())
          )
          .map((service) => (
            <Link
              href={`/${service.id}`}
              className="border rounded-xl px-4 py-3 bg-neutral-50 shadow-md shadow-neutral-200"
              key={service.id}
            >
              <div className="flex items-end gap-x-1">
                <h1 className="font-semibold text-2xl text-neutral-700">
                  {service.name}
                </h1>
                <h1 className=" text-lg font-semibold text-neutral-500">
                  {"by " + service.group}
                </h1>
              </div>
              <h2 className="text-neutral-600">{service.description}</h2>
              <div className="flex gap-x-2 mt-3">
                <Link href={service.siteUrl}>
                  <MdiWeb scope={30} />
                </Link>
                <Link href={service.githubUrl}>
                  <MingcuteGithub2Fill scope={30} />
                </Link>
              </div>
            </Link>
          ))}
      </div>
    </StyledMain>
  );
}
