'use client';

import Link from 'next/link';
import { NoGsmLogo, TablerBrandGithubFilled } from './components/Icons';
import Service from './components/Service';
import { StyledInfo, StyledMain } from './styled/main';

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
