export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  annotations: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sahana G",
    role: "Data Science Student • Developer • DSA Enthusiast",
    github: "https://github.com/sahanag137",
    email: "sahana.gcsds@gmail.com",
    tagline: "I build things, break things, debug them, and learn something new every time.",
    profileDescription:
      "Data Science Student interested in using data, statistics, and machine learning to solve practical problems.",
    aboutBio:
      "I'm a Data Science student interested in using data, statistics, and machine learning to solve practical problems. I'm currently strengthening my foundations in data structures and algorithms, data analysis, machine learning, SQL, databases, and data engineering.",
    avatarTags: [
      "curious",
      "builder",
      "problem solver",
      "always learning",
      "debug → learn → build",
    ],
    currentFocus: [
      "Data Science",
      "Machine Learning",
      "Data Analytics",
      "SQL & Database Systems",
      "Data Engineering",
      "Data Structures & Algorithms",
      "Problem Solving",
    ],
  },

  skills: [
    {
      title: "PROGRAMMING",
      skills: ["Python", "C++", "Java", "JavaScript"],
    },
    {
      title: "DATA",
      skills: ["Pandas", "NumPy", "SQL", "Data Analysis", "Data Visualization"],
    },
    {
      title: "MACHINE LEARNING",
      skills: ["Machine Learning", "NLP", "Computer Vision", "Generative AI"],
    },
    {
      title: "DEVELOPMENT",
      skills: ["HTML", "CSS", "JavaScript", "Flask", "REST APIs"],
    },
    {
      title: "DATABASES",
      skills: ["SQLite", "MySQL", "PostgreSQL"],
    },
    {
      title: "DATA ENGINEERING",
      skills: ["Python", "ETL", "SQLAlchemy", "PostgreSQL", "Power BI"],
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "VS Code", "Jupyter"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "library-management",
      title: "Library Management System",
      description:
        "A full-stack web-based Library Management System for managing books, members, authentication, borrowing, returning, transactions, and library operations.",
      githubUrl: "https://github.com/sahanag137/Library-Management-system-Flask-",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "JavaScript",
        "HTML",
        "CSS",
        "REST API",
      ],
      annotations: ["built this", "books → DB", "idea → implementation"],
    },
    {
      id: "retailflow",
      title: "RetailFlow",
      subtitle: "End-to-End Retail Data Engineering Pipeline",
      description:
        "An end-to-end retail data engineering project covering data generation, ETL processing, database integration, SQL analytics, and business intelligence.",
      githubUrl:
        "https://github.com/sahanag137/RetailFlow-Data-Engineering-Pipeline",
      technologies: [
        "Python",
        "ETL",
        "PostgreSQL",
        "SQLAlchemy",
        "SQL",
        "Data Analytics",
        "Power BI",
      ],
      annotations: ["data → insight", "debugging happened here", "pipeline built"],
    },
  ] as Project[],

  currentlyLearning: [
    "Machine Learning",
    "Generative AI",
    "Data Structures & Algorithms",
    "Data Engineering",
    "SQL",
    "Full Stack Development",
  ],
};
