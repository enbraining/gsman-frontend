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

export default function Service({
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
