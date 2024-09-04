'use client';

import Service from '../components/Service';
import { services } from '../data/service';
import { StyledMain } from '../styled/main';

export default function Page() {
  return (
    <StyledMain>
      <div className="m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.name}
            subTitle={service.description}
            href={service.siteUrl}
          />
        ))}
        <Service
          title="Dotori"
          subTitle="기숙사 통합 관리 서비스"
          href="https://www.dotori-gsm.com"
          detailHref="/dotori"
          imageHref="/dotori.png"
        />
        <Service
          title="GOMS"
          subTitle="수요 외출제 관리 서비스"
          href="https://play.google.com/store/apps/details?id=com.goms.presentation&hl=en-KR"
          detailHref="/dotori"
          imageHref="/goms.png"
          position="ping"
        />
        <Service
          title="Hi"
          subTitle="홈베이스 신청 서비스"
          href="https://msg-hi.vercel.app/"
          detailHref="/dotori"
          position="center"
          imageHref="/hi.png"
        />
      </div>
    </StyledMain>
  );
}

/*
<div className="grid mx-auto w-5/6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services
        // .filter((service) =>
        //   `${service.name}${service.group}${service.description}`
        //     .toLowerCase()
        //     .includes(search.toLowerCase()),
        // )
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
*/
