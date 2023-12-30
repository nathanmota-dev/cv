import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export const RESUME_DATA = {
  name: "Nathan Mota",
  initials: "NM",
  location: "Monte Carmelo, MG, Brasil",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Desenvolvedor Front-End apaixonado por transformar conceitos em interfaces envolventes e funcionais.",
  summary: `
    Sou um desenvolvedor Front-End que atualmente trabalha com ReactJs, NextJS e TailwindCSS. Minha jornada na área da tecnologia começou no ano de 2015 com o Técnico em Informática pela Unesp FCAV Câmpus Jaboticabal, e em 2019, iniciei a graduação em Sistemas de Informação pela Universidade Federal de Uberlândia (UFU).
    
    Atualmente, apesar de meu foco ser o Front-End, não me limito apenas a isso e já trabalhei com linguagens no Back-End desenvolvendo projetos com: 
    NodeJs utilizando Express e Fastify e PHP. 
    
    Além disso, para desenvolver esses projetos Back - ends, trabalhei com Banco de Dados como MySQL, PostgreSQL e ORMs como Knex e Prisma.
    Meu foco atualmente é aprimorar meus conhecimentos em programação e estou estudando TypeScript.
  `,
  avatarUrl: "https://avatars.githubusercontent.com/u/120220035?v=4",
  personalWebsiteUrl: "#",
  contact: {
    email: "nathansmota@gmail.com",
    tel: "+55 16 99993-6596",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nathanmota-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathansmota/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/nathanssmota/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade Federal de Uberlândia",
      degree: "Sistemas de Informação",
      start: "2019",
      end: "2024",
    },
    {
      school: "Universidade Estadual Paulista",
      degree: "Técnico em Informática",
      start: "2015",
      end: "2016",
    },
    {
      school: "Luiz Otávio Miranda",
      degree: "React.Js e Next.Js",
      start: "2023",
      end: "2024",
    },
    {
      school: "Universidade Federal de Uberlândia",
      degree: "Git e GitHub",
      start: "2023",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Freelancer",
      link: "#",
      badges: ["Remoto"],
      title: "Desenvolvedor Front-End",
      start: "2023",
      end: "2024",
      description:
        "Implementação de novas features e realização de interfaces do zero utilizando: React, TailwindCSS e NextJs.",
    },
    {
      company: "Universidade Federal de Uberlândia",
      link: "#",
      badges: [],
      title: "Monitor de Programação Web",
      start: "2023",
      end: "2023",
      description:
        "Monitoria da disciplina de Programação para Internet, auxiliando os alunos com dúvidas e correção de exercícios.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NextJs",
    "TailwindCSS",
    "Node.js",
    "Express",
    "MySQL/PostrgreSQL/MongoDB",
    "PHP",
  ],
  projects: [
    {
      title: "Meow Cafe",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      description: "Landing Page responsiva sem o uso de frameworks.",
      link: {
        label: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
        href: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
      },
    },

    {
      title: "Insove Medical Healthcare",
      techStack: [
        "TailwindCSS",
        "Remix Icons",
        "SwiperJs",
        "ScrollReveal",
      ],
      description: "Landing Page utilizando TailwindCSS projetada para consultórios médicos",
      link: {
        label: "https://insove-medical-healthcare.netlify.app/",
        href: "https://insove-medical-healthcare.netlify.app/",
      },
    },

    {
      title: "Tech Vantage",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Bootstrap",
        "MySQL",
      ],
      description: "Site para empresa de tecnologia responsivo com PHP",
      link: {
        label: "https://techvantage.000webhostapp.com/index.php",
        href: "https://techvantage.000webhostapp.com/index.php",
      },
    },

    {
      title: "Links Set",
      techStack: [
        "ReactJs",
      ],
      description: "Árvore de links inspirada no Linktree com ReactJs",
      link: {
        label: "https://react-links-set.vercel.app/",
        href: "https://react-links-set.vercel.app/",
      },
    },

    {
      title: "Google Keep Clone",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      description: "Clone do Google Keep criado com HTML, CSS e JavaScript",
      link: {
        label: "https://google-keep-js.vercel.app/",
        href: "https://google-keep-js.vercel.app/",
      },
    },

    {
      title: "Lista de Países",
      techStack: [
        "NextJs",
        "Server Components",
        "API Rest Countries",
      ],
      description: "Clone do Google Keep criado com HTML, CSS e JavaScript",
      link: {
        label: "https://mp-lista-de-paises-next-delta.vercel.app/",
        href: "https://mp-lista-de-paises-next-delta.vercel.app/",
      },
    },
  ],
} as const;