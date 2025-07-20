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
  rubrixCode,
  java,
  gynesysIcon,
  infiniteEcommerce,
  astronumerology,
  steth,
  aiClothingDetection,
  football,
  farmHome
} from "../assets";
// import football from "../assets/football.png";

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
    date: "Sept 2024 - Dec 2024",
    points: [
      "Developed and maintained responsive web applications using React.js and mobile applications using Flutter.",
      "Collaborated with cross-functional teams, including designers, product managers, and backend developers, to deliver high-quality products.",
      "Integrated RESTful APIs and third-party services to enhance application functionality.",
      "Implemented state management solutions like Provider and Riverpod in Flutter for efficient app development.",
      "Optimized applications for performance, scalability, and cross-browser compatibility.",
      "Conducted code reviews and provided constructive feedback to ensure code quality and best practices."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Rubrix Code",
    icon: rubrixCode, // Replace with the actual icon import
    iconBg: "#091720", // Background color for the icon
    date: "Aug 2024 - Present",
    points: [
      
        "Worked as a Full Stack Developer at Rubrix, collaborating with multiple clients to successfully deliver 7+ full-cycle projects.",
        "Designed and implemented scalable and maintainable software architectures aligned with industry standards and best practices.",
        "Ensured adherence to clean code principles, design patterns, and modern development techniques across frontend and backend systems.",
        "Led and contributed to both client-side and server-side development, ensuring seamless integration and high performance.",
        "Communicated effectively with stakeholders to translate requirements into technical solutions and maintain project alignment.",
        "Performed rigorous testing and code reviews to maintain high-quality deliverables and ensure long-term maintainability."
      
        ]
  }
];

const projects = [
  {
    name: "AI Clothing Detection" ,
    description:
      "Built an AI-powered clothing detection model capable of identifying various clothing types and distinguishing colors with high accuracy. The model supports both live video and static image input, enabling real-time fashion recognition. It enhances retail and fashion tech solutions by automating clothing classification and color analysis for diverse use cases.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient"
      },
      {
        name: "YOLO",
        color: "green-text-gradient"
      },
      {
        name: "computerVision",
        color: "pink-text-gradient"
      }
    ],
    image: aiClothingDetection,
    source_code_link: "https://github.com/zarnabali/AI-Clothing-Detection-"
  },
  {
    name: "Football Analysis AI Model" ,
    description:
      "Developed an AI-based football analysis model that detects players, goalkeepers, referees, and teams in real time. It tracks ball possession, identifies offside situations, and delivers in-game insights from both live video and recorded footage, enhancing analysis for coaches, analysts, and broadcasters.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient"
      },
      {
        name: "YOLO",
        color: "green-text-gradient"
      },
      {
        name: "computerVision",
        color: "pink-text-gradient"
      }
    ],
    image: football, // Temporarily using aiClothingDetection instead of football
    source_code_link: "https://github.com/zarnabali/Football-Analysis-AI-Model"
  },
  {
    name: "STETH",
    description:
      "Got it! Here's the updated version of your medical wear eCommerce store in the same reference length:Built a medical wear eCommerce platform with modules for Admin, Students, and General Users. Features include dynamic pages, discount management, student verification, order tracking and analytics, inventory control, and role-based functionality for smooth and secure operations."
        ,  tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "cloudinary and mongodb",
        color: "pink-text-gradient"
      }
    ],
    image: steth,
    source_code_link: "https://github.com/zarnabali/STETH_FULL_STACK"
  },
  {
    name: "Astronumerology",
    description:
      "Built a 3D website for Astronumerology, featuring interactive 3D models, animations, and a fully responsive frontend for an engaging and immersive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "3 JS",
        color: "green-text-gradient"
      },
      {
        name: "nodejs",
        color: "pink-text-gradient"
      }
    ],
    image: astronumerology,
    source_code_link: "https://github.com/zarnabali/Astronumerology"
  },
  {
    name: "Infinite E-Commerce",
    description:
      "Developed Infinite, a stylish eCommerce platform with modules for Admin, Men, and Women. Integrated video animations, elegant UI design, dynamic product pages, role-based management, and smooth user experience for seamless browsing and shopping.",
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
        name: "nodejs",
        color: "pink-text-gradient"
      }
    ],
    image: infiniteEcommerce,
    source_code_link: "https://github.com/zarnabali/Infinite"
  },
  {
    name: "Farm Home",
    description:
      "Built FarmHome, a farm management platform with Super Admin, Admin, Manager, and Assistant modules. Features include animal and breeding management, a marketplace with Stripe payments, role-based access, real-time updates via WebSockets, incident tracking, order management, AI breeding suggestions, AI chatbot, and multilingual support with translation in 5 languages.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "nodejs",
        color: "pink-text-gradient"
      },
      {
        name: "webSockets",
        color: "blue-text-gradient"
      },
      
    ],
    image: farmHome,
    source_code_link: "https://github.com/zarnabali/FarmHouse"
  }

];

export { services, technologies, technologies2, experiences, projects };