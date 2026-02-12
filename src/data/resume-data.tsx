// import {
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alexander Varga",
  initials: "AV",
  location: "Canada, MST",
  locationLink: "https://www.google.com/maps/place/Calgary",
  about:
    "Masters In Quantum Computing Candidate.",
  summary:
    "Highly competent Software/Biomedical Engineer with over six years of experience developing complex software systems, driven by a passion for tackling challenging problems in AI/ML, quantum computing, distributed systems, and cybersecurity. Currently pursuing a master’s in quantum computing to innovate at the intersection of advanced quantum technologies and real-world applications. I work as a full-stack SWE for startups, delivering diverse solutions spanning full-stack development, DevOps, ZKP, and LLM experimentation. Open to opportunities as a Software, Data, or ML Engineer—feel free to reach out!",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQHjkRCjZDVOCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692650329724?e=1739404800&v=beta&t=o8DrNKh35v-pfpeg7jOFxv2tmvIgsLO6dTyu-ncDINw",
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
      school: "MQuaC - Quantum Computing",
      degree: "University of Calgary",
      start: "2024",
      end: "2025",
    },
    {
      school: "B.Sc - Software & Biomedical Engineering",
      degree: "University of Calgary",
      start: "2019",
      end: "2023",
    },
    {
      school: "Certificate - Engineering Leadership",
      degree: "University of Calgary",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Varga Capital",
      link: "/not-found",
      badges: ["International"],
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
            Have designed and implemented software solutions leveraging AI, blockchain, and recently exploring how quantum can be used.
          </li>
          <li>
            I am deeply committed to delivering cutting-edge solutions that drive innovation and efficiency.
          </li>
        </>
    },
    {
      company: "Quantum City",
      link: "https://io.ucalgary.ca/quantum-city",
      badges: ["Contract - Alberta, CA"],
      title: "Research Intern",
      logo: "",
      start: "2025",
      end: "2025",
      description: "AI agents for quantum computing."
    },
    {
      company: "Mala Connect",
      link: "https://malaconnect.de/",
      badges: ["Remote - Köln, DE"],
      title: "SWE",
      logo: "",
      start: "2023",
      end: "2025",
      description:
        "Contributing to the development of an innovative full-stack healthcare platform, connecting individuals in need with those who can provide care and services. Technologies: Next.js, TypeScript, Tailwind, Flask, PostgresDB, Redis, Docker, RabbitMQ, Nginx, GCP, Stripe",
    },
    {
      company: "[Confidential]",
      link: "",
      badges: ["Remote - Toronto/Prague"],
      title: "Software Security Developer",
      logo: "",
      start: "2022",
      end: "2024",
      description:
        "Developing state-of-the-art privacy-enhancing software integrating the power of Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZKP), and Machine Learning (ML), with a focus on compliance with regulatory frameworks like GDPR and CPPA. Incorporating quantum-resistant technologies to ensure long-term data security. Technologies: Rust, FHE, ZKP, ML, Docker.",
    },
    {
      company: "SECURE Energy Services",
      link: "https://www.secure-energy.com/",
      badges: ["Contract - Alberta, CA"],
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
      badges: ["Contract - Alberta, CA"],
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
    // Quantum Computing
    "Quantum Algorithms",
    "Qiskit",
    "Cirq",
    //"Quantum Circuit Optimization",
    //"Post-Quantum Cryptography",

    // Programming Languages
    "Python",
    "C/C++",
    "Rust",
    "Assembly",
    "Java",
    "JavaScript",
    "TypeScript",
    "Solidity",
    "MOVE",

    // Web and Frontend
    "React/Next.js",
    "Vue.js",
    "QT",
    "Kivy",

    // Backend Development
    "Scalable and Event-Driven Architecture",
    "Backend Frameworks (Node.js, Express.js, FastAPI, Django, Flask)",
    "API Design (REST, GraphQL, gRPC, WebSockets)",
    "Authentication (OAuth, JWT, SSO)",
    "Performance Optimization (Caching, Message Queues, Load Balancing)",
    "Server Management (Nginx, Apache, Reverse Proxies)",
    "Testing (Backend Frameworks, Integration, Unit Testing)",

    // Databases and Data Management
    "SQL",
    "NoSQL",
    "Vector Databases",
    "Graph Databases",
    "ORMs",

    // Cloud and DevOps
    "AWS",
    "GCP",
    "Docker",
    "CI/CD Pipelines",

    // Systems and Optimization
    "Linux",
    "Windows",

    // AI and Machine Learning
    "LLMs",
    "Langchain",
    "TensorFlow",
    "PyTorch",
    "MLOps",

    // Tools and Practices
    "Git",
    "Algorithms & Data Structures",
    "Distributed Systems",
    "Microservices",
    "Cybersecurity",
    "Networks",
    "Agile",
    "Scrum",

    // Languages
    "English",
    "French",
    "Spanish",
  ],

  projects: [
    {
      title: "Quantum Semantic Hilbert Space Search",
      techStack: [
        "Qiskit",
        "Python",
        "Grovers Algorithm",
        "Qiskit Functions/Addons",
      ],
      description: `Semantic Hilbert Space Search (SHS), combining quantum computing and natural language processing (NLP) to enable efficient semantic searches across text corpora.  
      **Winner at Q2B24 Silicon Valley Hackathon, hosted by IBM Quantum, Aqora, & QCWare.**`,
      logo: "",
      link: {
        label: "gen-q-hack2024.vercel.app",
        href: "https://gen-q-hack2024.vercel.app/",
      },
    },
    {
      title: "Q-Impact",
      techStack: [
        "TypeScript",
        "Next.js",
        "Qiskit",
        "Quantum Rings",
        "Quantum Approximate Optimization Algorithms",
        "Tensor Networks",
      ],
      description: `Empowering Sustainable Investment through Quantum Advantage. 
      **Winner at 2024 GenQ Hackathon, hosted by QAI Ventures.**`,
      logo: "",
      link: {
        label: "gen-q-hack2024.vercel.app",
        href: "https://gen-q-hack2024.vercel.app/",
      },
    },
    {
      title: "Pintxo [COMING SOON]",
      techStack: [
        "TypeScript",
        "Next.js",
        "Cohere AI",
        "Vespa",
        "Python",
        "Nest.js",
        "Docker",
        "Kafka",
        "Substreams",
        "Docker",
      ],
      description: "Natural Language Interface to the Blockchain.",
      logo: "",
      link: {
        label: "pintxo.ai",
        href: "https://www.pintxo.ai/",
      },
    },
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
        href: "https://gecover.vercel.app/",
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
      techStack: ["JavaScript", "Langchain", "OpenAI", "Jira", "Atlassian"],
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
      techStack: ["C", "Python", "ROS", "Kivy", "Motor/Sensor Interfacing - LiDAR, Intel Realsense, Dynamixel", "Embedded Systems"],
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