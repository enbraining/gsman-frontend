export interface ServiceDetail {
  id: number;
  name: string;
  group: string;
  description: string;
  siteUrl: string;
  githubUrl: string;
  details: {
    detailDescription: string;
    detailLink: {
      name: string;
      link: string;
    }[];
  };
}

export const services: ServiceDetail[] = [
  {
    id: 1,
    name: "SMS",
    group: "MSG",
    description: "Student Management Service",
    siteUrl: "https://sms.msg-team.com",
    githubUrl: "https://github.com/GSM-MSG/SMS-FrontEnd",
    details: {
      detailDescription: "detailDescription",
      detailLink: [
        {
          name: "Github Frontend",
          link: "https://github.com/GSM-MSG/SMS-FrontEnd",
        },
        {
          name: "Github Backend",
          link: "https://github.com/GSM-MSG/SMS-Backend",
        },
      ],
    },
  },
  {
    id: 2,
    name: "GAuth",
    group: "MSG",
    description: "교내 계정 통합 소셜 로그인 서비스",
    siteUrl: "https://gauth.co.kr",
    githubUrl: "https://github.com/GSM-MSG/GAuth-FrontEnd",
    details: {
      detailDescription: "detailDescription",
      detailLink: [
        {
          name: "Github Frontend",
          link: "https://github.com/GSM-MSG/GAuth-FrontEnd",
        },
        {
          name: "Github Backend",
          link: "https://github.com/GSM-MSG/GAuth-BackEnd",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Dotori",
    group: "Empersand",
    description: "Dotori, Dormitory를 담다.",
    siteUrl: "https://www.dotori-gsm.com",
    githubUrl: "https://github.com/Team-Ampersand/Dotori-client-v2",
    details: {
      detailDescription: "detailDescription",
      detailLink: [
        {
          name: "Github Frontend",
          link: "https://github.com/Team-Ampersand/Dotori-client-v2",
        },
        {
          name: "Github Backend",
          link: "https://github.com/Team-Ampersand/Dotori-server-v2",
        },
      ],
    },
  },
];
