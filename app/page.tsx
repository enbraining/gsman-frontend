'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { NoGsmLogo, TablerBrandGithubFilled } from './components/Icons';

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

const StyledInfo = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  color: black;
  background-color: white;
  transition-duration: 300ms;
  width: 16rem;
  height: 18rem;
  border-radius: 1rem;

  .details {
    transition-duration: 300ms;
    opacity: 0;
  }

  :hover img {
    left: 100px;
    width: 18rem;
  }
`;

const StyledMain = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: black;
  background-size: cover;
  padding: 5rem 0;
  color: white;
  box-shadow: 0 20px 10px #aaaaaa3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <StyledMain>
      <div className="m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Service
          title="Dotori"
          subTitle="기숙사 통합 관리 서비스"
          href="https://www.dotori-gsm.com"
          detailHref="/dotori"
          imageHref="/dotori.png"
          width={240}
        />
        <Service
          title="GOMS"
          subTitle="수요 외출제 관리 서비스"
          href="https://play.google.com/store/apps/details?id=com.goms.presentation&hl=en-KR"
          detailHref="/dotori"
          imageHref="/goms.png"
          width={320}
          position="ping"
        />
        <Service
          title="Hi"
          subTitle="홈베이스 신청 서비스"
          href="https://msg-hi.vercel.app/"
          detailHref="/dotori"
          position="center"
          imageHref="/hi.png"
          width={200}
        />
        <StyledInfo>
          <div className="w-full h-full grid grid-cols-2">
            <Link
              href={'https://github.com/enbraining'}
              className="p-2 w-full h-full flex bg-slate-700"
            >
              <div className="m-auto text-white">
                <TablerBrandGithubFilled scope={40} />
              </div>
            </Link>
            <Link
              href={'https://no-gsm.com'}
              className="p-2 w-full h-full flex bg-blue-500"
            >
              <div className="m-auto text-white">
                <NoGsmLogo width={90} height={30} />
              </div>
            </Link>
            <Link
              href={'/more'}
              className="p-2 w-full h-full flex bg-slate-600 col-span-2"
            >
              <div className="m-auto flex items-center gap-x-2 hover:gap-x-6 duration-300 font-semibold text-xl text-slate-100">
                <p>더 많은 프로젝트</p>
                <p>→</p>
              </div>
            </Link>
          </div>
        </StyledInfo>
      </div>
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
              className={`${position == 'ping' && 'left-[-140px]'} ${
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
