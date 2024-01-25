// import {
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alexander Varga",
  initials: "AV",
  location: "Canada, MST",
  locationLink: "https://www.google.com/maps/place/Calgary",
  about:
    "Currently focused on professional development. Passionate about working on complex problems in software engineering, machine learning, and data science.",
  summary:
    "Software/Biomedical engineering graduate with keen interest in AI/ML, distributed systems, computer security and networks. Currently working part-time as a full stack SWE for a handful of start-ups, implementing a wide range of solutions from full-stack devops, to ZKP, to experimenting with LLMs. If you need a Software/Data/ML engineer please contact me.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQHjkRCjZDVOCQ/profile-displayphoto-shrink_200_200/0/1692650329724?e=1711584000&v=beta&t=gx4_TL-tG1B-2Ez7xksY-a1w2RR27znvJ_DVZAOWgY8",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "vargacapital@protonmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alex-varga14",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexander-varga14",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Calgary",
      degree: "B.Sc. in Software and Biomedical Engineering.",
      start: "2019",
      end: "2023",
    },
    {
      school: "University of Calgary",
      degree: "Certificate in Engineering Leadership",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Mala Connect",
      link: "https://malaconnect.de/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "",
      start: "2023",
      end: "Present",
      description:
        "Contributing to the development of an innovative full-stack start-up, advancing healthcare's digital transformation. Technologies: Next.js, TypeScript, Tailwind, Flask, PostgresDB, Redis, Docker, RabbitMQ, Nginx, GCP, Stripe",
    },
    {
      company: "PrivID",
      link: "https://www.privid.co/",
      badges: ["Remote"],
      title: "Software Security Developer",
      logo: "",
      start: "2022",
      end: "Present",
      description:
        "Developing novel, state-of-the-art software integrating the power of FHE, ZKP, and ML in compliance with new regulatory bodies such as GDPR, CPPA. Technologies: Rust, FHE, ZKP, ML, Docker",
    },
    {
      company: "Varga Capital",
      link: "/not-found",
      badges: ["Consulting"],
      title: "Owner / Consultant",
      logo: "",
      start: "2022",
      end: "Present",
      description:
        <>
          <li>
            Software consulting encompassing full-stack development, data science, and machine learning, with a keen focus on tackling complex technological challenges.
          </li>
          <li>
            I am deeply committed to delivering cutting-edge solutions that drive innovation and efficiency.
          </li>
        </>
    },
    {
      company: "SECURE Energy Services",
      link: "https://www.secure-energy.com/",
      badges: ["Contract"],
      title: "Software Consultant",
      logo: "",
      start: "2022",
      end: "2022",
      description:
      <>
        <li>
          Led initiative to optimize SQL database performance, leveraging MSSQL tools. 
        </li>
        <li>
          Developed comprehensive documentation for SQL tables and views, facilitating better information consolidation and identification of critical pain points, playing a pivotal role in enhancing team understanding and collaboration on database architecture.
        </li>
        <li>
          Redesigned SQL queries, incorporating best practices in DBMS.
        </li>
      </>
    },
    {
      company: "Embedded Systems Products Inc.",
      link: "http://www.espi.ca/",
      badges: ["Contract"],
      title: "Embedded Systems Consultant ",
      logo: "", // todo 
      start: "2021",
      end: "2021",
      description:
      <>
        <li>
          Spearheaded the testing and refinement of next-generation virtual assistant technology, ensuring its reliability and performance exceeded industry standards.
        </li>
        <li>
          Implemented sophisticated unit testing methodologies to evaluate complex embedded systems, significantly enhancing system stability and efficiency.
        </li>
      </>
    },
  ],
  skills: [
    "Python",
    "LLMs",
    "Langchain",
    "C/C++",
    "Rust",
    "Assembly",
    "Java",
    "JavaScript/TypeScript",
    "Solidity",
    "MOVE",
    "React/Next.js",
    "Vue.js",
    "Node.js",
    "Kivy/PyQt",
    "SQL DBs",
    "NoSQL DBs",
    "Vector DBs",
    "AWS",
    "GCP",
    "Docker",
    "Linux",
    "Windows",
    "Git",
    "Software Architecture",
    "Computer Security/Networks",
    "Testing/QA",
    "English + French + Spanish",
  ],
  projects: [
    {
      title: "GeCover",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vercel",
        "Tailwind",
        "Supabase",
        "Python",
        "FastAPI",
        "Cohere/OpenAI",
        "Fine Tuning",
        "Docker",
      ],
      description: "AI Tool Kit Accelerating the Job Application Process.",
      logo: "",
      link: {
        label: "gecover.com",
        href: "https://www.gecover.com/",
      },
    },
    {
      title: "EzServe",
      techStack: ["Python", "Langchain", "GCP - VertexAI, Speech API, Translation API", "PyQt5", "Weaviate VectorDB", "Square API", "Docker", "Raspberry Pi 4"],
      description:
        "An LLM-powered tableside server built to run on a Raspberry Pi.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/EzServe/tree/master",
        href: "https://github.com/alex-varga14/EzServe/tree/master",
      },
    },
    {
      title: "Intelli-Plan",
      techStack: ["JavaScript", "Langchain", "OpenAI", "Jira", "Atlassian" ],
      description:
        "An Atlassian Jira plugin leveraging LLMs to generate software sprints.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/projectmanagement-forge-app/tree/main",
        href: "https://github.com/alex-varga14/projectmanagement-forge-app/tree/main",
      },
    },
    {
      title: "Life-Sized Humanoid Robot",
      techStack: ["C" , "Python", "ROS", "Kivy", "Motor/Sensor Interfacing - LiDAR, Intel Realsense, Dynamixel", "Embedded Systems"],
      description:
        "Portions of capstone work - Software for life-sized humanoid robot.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/Life-Sized-Humanoid-Robot",
        href: "https://github.com/alex-varga14/Life-Sized-Humanoid-Robot",
      },
    },
    {
      title: "Distributed Coupon Application",
      techStack: ["Flutter", "Python", "Django", "MySQL", "AWS", "Docker", "Redis", "gRPC"],
      description:
        "Distributed coupon application implementing replication, fault tolerance, consistency and synchronization.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/Distributed-Coupon-Application/tree/main",
        href: "https://github.com/alex-varga14/Distributed-Coupon-Application/tree/main",
      },
    },
    {
      title: "Speaker Recognition using GMM",
      techStack: ["Python", "Sklearn", "Pandas", "Numpy"],
      description:
        "Developed a speaker recognition system using Gaussian Mixture Models and Mel Frequency Cepstral Coefficients.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/Biometrics-Labs/blob/main/speaker-recognition-gmm/LabProject_SpeakerRecognition_AlexanderVarga.ipynb",
        href: "https://github.com/alex-varga14/Biometrics-Labs/blob/main/speaker-recognition-gmm/LabProject_SpeakerRecognition_AlexanderVarga.ipynb",
      },
    },
    {
      title: "Course Critic",
      techStack: ["Vue.js", "Node.js", "Bootstrap 5", "MySQL", "HTML/CSS"],
      description:
        "Review, rate and discuss courses on Course Critic; a full-stack application built for students and peers.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/Course-Critic/tree/main",
        href: "https://github.com/alex-varga14/Course-Critic/tree/main",
      },
    },
    {
      title: "Fruit Classification using CNN",
      techStack: ["Python", "TensorFlow", "Keras", "Sklearn", "seaborn", "Numpy", "Kaggle"],
      description:
        "Designed and trained a Keras-based Convolutional Neural Network for efficient fruit image classification, achieving high accuracy with advanced data preprocessing and model optimization techniques.",
      logo: "",
      link: {
        label: "github.com/alex-varga14/BMEN415---Machine-Learning-Models/blob/main/Fruit%20Code/Imaging/Fruit.ipynb",
        href: "https://github.com/alex-varga14/BMEN415---Machine-Learning-Models/blob/main/Fruit%20Code/Imaging/Fruit.ipynb",
      },
    },
  ],
} as const;
