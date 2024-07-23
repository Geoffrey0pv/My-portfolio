import {
    data,
    devops,
    architecture,
    web,
    icesi,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    scala,
    java,
    cplus,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Web Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: data,
    },
    {
      title: "Devops",
      icon: devops,
    },
    {
      title: "Software Engineer",
      icon: architecture,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
      category: "programming language",
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "programming language",
    },
    {
      name: "HTML 5",
      icon: html,
      category: "frontend",
    },
    {
      name: "CSS 3",
      icon: css,
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: typescript,
      category: "programming language",
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "frontend",
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      category: "frontend",
    },
    {
      name: "Node JS",
      icon: nodejs,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      category: "backend",
    },
    {
      name: "Three JS",
      icon: threejs,
      category: "frontend",
    },
    {
      name: "Git",
      icon: git,
      category: "tools",
    },
    {
      name: "Figma",
      icon: figma,
      category: "tools",
    },
    {
      name: "Docker",
      icon: docker,
      category: "tools",
    },
  ];
  
  const experiences = [
    {
      title: "Industrial Engineering",
      company_name: "Icesi University",
      icon: icesi,
      iconBg: "#E6DEDD",
      date: "July 2021 - december 2026",
      points: [
        "Through data process and analysis, process simulation, 3D printing and robotics, I'm able to make the best decision in the organisations where I'm located identifying areas of improvement in the production process.",
      "Modelling, simulation, automation, process improvement, resource management and sustainability to lead project and achieve the goals of the company.",
      "International engineering competences (defined by ABET):",
      "1. Problem solving.",
      "2. Design of engineering solutions.",
      "3. Communication.",
      "4. Teamwork and leadership.",
      "5. Ethical and professional responsibility.",],
    },
    {
      title: "Software Engineering",
      company_name: "Icesi University",
      icon: icesi,
      iconBg: "#E6DEDD",
      date: "July 2022 - december 2026",
      points: [
        "Artificial Intelligence, Data analytics, DevOps, Cybersecurity, requeriments assessments, software design, testing & develop, full stack web development, mobile applications development, scrum master & technology business entrepreneur.",
        "International engineering competences (defined by ABET):",
        "1. Problem solving.",
        "2. Design of engineering solutions.",
        "3. Communication.",
        "4. Teamwork and leadership.",
        "5. Ethical and professional responsibility."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };