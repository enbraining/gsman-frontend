"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdiWeb, MingcuteGithub2Fill } from "../components/Icons";
import { ServiceDetail, services } from "../data/service";

const WithGradient = styled.div`
  background-image: url("/main-banner.png");
  background-size: cover;
  padding: 9rem 0 5rem 6rem;
  color: white;
  margin-bottom: 4rem;
  box-shadow: 0 20px 10px #aaaaaa3b;
  display: flex;
  flex-direction: column;
`;

export default function Page({ params }: { params: { id: number } }) {
  const [service, setService] = useState<ServiceDetail>();

  useEffect(() => {
    const fetchService = async () => {
      setService(
        services.find((service: ServiceDetail) => service.id == params.id)
      );
    };

    fetchService();
  }, [params.id]);

  return (
    <main>
      <WithGradient>
        <h1 className="text-3xl font-semibold">{service?.name}</h1>
        <h2 className="text-lg">{service?.description}</h2>
        {service?.siteUrl && service.githubUrl && (
          <div className="flex gap-x-2 mt-3">
            <Link href={service?.siteUrl!}>
              <MdiWeb scope={30} />
            </Link>
            <Link href={service?.githubUrl!}>
              <MingcuteGithub2Fill scope={30} />
            </Link>
          </div>
        )}
      </WithGradient>
      <div className="ml-[6rem]">
        <p>{service?.details.detailDescription}</p>
        <div className="mt-8 gap-y-2 grid w-fit">
          {service?.details.detailLink.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="border-b border-b-neutral-800"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
