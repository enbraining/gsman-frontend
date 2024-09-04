'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const ServiceTitle = styled.div`
  top: 55%;
  mix-blend-mode: exclusion;
  position: absolute;
  z-index: 10;
  color: white;
`;

const StyledService = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  color: black;
  background-color: white;
  transition-duration: 300ms;
  width: 16rem;
  height: 18rem;
  border-radius: 1rem;
  padding: 1rem;

  .details {
    transition-duration: 300ms;
    opacity: 0;
  }

  :hover .details {
    opacity: 100;
  }

  :hover {
    padding: 3.5rem;
    --tw-shadow: 0 25px 50px -12px rgb(255 255 255 / 0.625);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #ffff),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  :hover img {
    left: 100px;
    width: 18rem;
  }
`;

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
  display: flex;
  min-height: 100vh;
  /* background-image: url('/main-banner.png'); */
  background-color: black;
  background-size: cover;
  padding: 5rem 0;
  color: white;
  box-shadow: 0 20px 10px #aaaaaa3b;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  return (
    <StyledMain>
      <div className="m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Service
          title="Dotori"
          subTitle="기숙사 통합 관리 서비스"
          href="https://do"
          detailHref="https://do"
          imageHref="/dotori.png"
          width={240}
        />
        <Service
          title="GOMS"
          subTitle="수요 외출제 관리 서비스"
          href="https://do"
          detailHref="https://do"
          imageHref="/goms.png"
          width={320}
          position="ping"
        />
        <Service
          title="Hi"
          subTitle="홈베이스 신청 서비스"
          href="https://do"
          detailHref="https://do"
          position="center"
          imageHref="/hi.png"
          width={200}
        />
        <Service
          title="더보기"
          subTitle="다른 프로젝트도 궁금하신가요?"
          href="/more"
          width={240}
        />
      </div>
      {/* <WithGradient>
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
                  <h2 className="text-neutral-600 mb-2">
                    {service.description}
                  </h2>
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
      </div>*/}
    </StyledMain>
  );
}

function Service({
  title,
  subTitle,
  href,
  detailHref,
  imageHref,
  width,
  position,
}: {
  title: string;
  subTitle: string;
  href: string;
  detailHref?: string;
  imageHref?: string;
  width: number;
  position?: 'left' | 'ping' | 'center';
}) {
  return (
    <Link href={href}>
      <StyledService>
        <div className="my-auto bg-white duration-700">
          <ServiceTitle>
            <h1 className="font-semibold text-4xl">{title}</h1>
            <h2 className="text-sm">{subTitle}</h2>
            {detailHref && (
              <Link href={detailHref} className="details text-sm">
                <p className="mt-4">자세히 보기 →</p>
              </Link>
            )}
          </ServiceTitle>
          {imageHref && (
            <Image
              className={`${position == 'ping' && 'left-[-150px]'} ${
                position == 'center' && 'left-[20%]'
              } absolute left-[-30px] bottom-7 duration-700`}
              src={imageHref!}
              alt="dotori logo"
              width={width}
              height={width}
            />
          )}
        </div>
      </StyledService>
    </Link>
  );
}
