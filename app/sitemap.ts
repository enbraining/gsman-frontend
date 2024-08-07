import { MetadataRoute } from 'next';
import { services } from './data/service';

interface Site {
  url: string;
  lastModified: string | Date | undefined;
  changeFrequency:
    | 'monthly'
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'yearly'
    | 'never'
    | undefined;
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...services.map((service) => {
      return {
        url: `https://gsm.fodo.dev/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      } as Site;
    }),
    {
      url: 'https://gsm.fodo.dev/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
