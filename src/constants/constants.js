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
  nodejs,
  mongodb,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
  dart,
  flutter,
  sql,
  c_plusplus,
  java,
  gynesysIcon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Mobile App Developer",
    icon: mobile
  },
  {
    title: "Full Stack Developer",
    icon: backend
  },
  {
    title: "UI/UX Designer",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  ,
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Next JS",
    icon: next
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "SQL",
    icon: sql
  },
  {
    name: "Dart",
    icon: dart
  },
  {
    name: "Flutter",
    icon: flutter
  }
];

const technologies2 = [
  {
    name: "C++ & C#",
    icon: c_plusplus
  },
  {
    name: "Java",
    icon: java
  }
];

const experiences = [
  {
    title: "Web & Mobile Developer",
    company_name: "Gynesys Lab",
    icon: gynesysIcon, // Replace with the actual icon import
    iconBg: "#383E56", // Background color for the icon
    date: "Sept 2024 - (continued)",
    points: [
      "Developed and maintained responsive web applications using React.js and mobile applications using Flutter.",
      "Collaborated with cross-functional teams, including designers, product managers, and backend developers, to deliver high-quality products.",
      "Integrated RESTful APIs and third-party services to enhance application functionality.",
      "Implemented state management solutions like Provider and Riverpod in Flutter for efficient app development.",
      "Optimized applications for performance, scalability, and cross-browser compatibility.",
      "Conducted code reviews and provided constructive feedback to ensure code quality and best practices."
    ]
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/"
  }
];

export { services, technologies, technologies2, experiences, projects };