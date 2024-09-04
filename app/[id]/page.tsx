import Link from 'next/link';
import {
  MaterialSymbolsArrowLeftAltRounded,
  MdiWeb,
  TablerBrandGithubFilled,
} from '../components/Icons';
import { services } from '../data/service';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id == params.id);

  return {
    title: `GSMAN | ${service ? service.name : 'Project'}`,
    description: service?.description,
    openGraph: {
      title: `GSMAN | ${service?.name}`,
      description: service?.description,
      url: `https://gsm.fodo.dev/${service?.id}`,
      siteName: 'GSMAN',
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id == params.id);

  return (
    <main>
      <div
        style={{
          backgroundImage: "url('/main-banner.png')",
          backgroundSize: 'cover',
          padding: '6rem 0 5rem 6rem',
          color: 'white',
          marginBottom: '4rem',
          boxShadow: '0 20px 10px #aaaaaa3b',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link href={'/'}>
          <MaterialSymbolsArrowLeftAltRounded scope={30} />
        </Link>
        <div className="mt-5">
          <h1 className="text-3xl font-semibold">{service?.name}</h1>
          <h2 className="text-lg">{service?.description}</h2>
          <div className="flex gap-x-2 mt-3">
            <Link href={service?.siteUrl!}>
              <MdiWeb scope={30} />
            </Link>
            <Link href={service?.githubUrl!}>
              <TablerBrandGithubFilled scope={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-[6rem]">
        <p>{service?.details.detailDescription}</p>
        <div className="mt-8 gap-y-2 grid w-fit">
          {service?.details.detailLink.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="border-b border-b-neutral-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
