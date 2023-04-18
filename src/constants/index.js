import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  erxes,
  githubLogo,
  cloudflare
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'github',
    icon: githubLogo
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'docker',
    icon: docker
  },
  {
    name: 'cloudflare',
    icon: cloudflare
  }
];

const experiences = [
  {
    title: 'DevOps Engineer',
    company_name: 'Erxes Inc',
    icon: erxes,
    iconBg: '#E6DEDD',
    date: 'February 2021 - May 2021',
    points: [
      'Configuring S3 and Simple Email Service of AWS.',
      'Deploying xos on enterprises ',
      'Improving the deployment documentation of Erxes.'
    ]
  },
  {
    title: 'Front-end Developer',
    company_name: 'Erxes Inc',
    icon: erxes,
    iconBg: '#E6DEDD',
    date: 'May 2021 - August 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Discovering and implementing Cloudflare Pages to maximize development efficiency.',
      'Updating docusaurus v1 to v2.'
    ]
  },
  {
    title: 'Back-end Developer',
    company_name: 'Erxes Inc',
    icon: erxes,
    iconBg: '#E6DEDD',
    date: 'August 2022 - April 2023',
    points: [
      'Enhancing and maintaining the back-end of Erxes.',
      'Improving core feature of Erxes.',
      'Fixing bugs and improving the performance of Erxes.'
    ]
  }
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export { services, technologies, experiences, projects };
