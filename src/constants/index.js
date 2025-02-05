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
    icfesmodel,
    taskproject,
    ecommercefutbol,
    threejs,
    python,
    scala,
    java,
    cplus,
    postgresql,
    django,
    mysql,
    postman,
    azuredevops,
    jupyter,
    freelance,
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
      name: "Python",
      icon: python,
      category: "programming language",
    },
    {
      name: "Scala",
      icon: scala,
      category: "programming language",
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "PostgreSQL",
      icon: postgresql,
      category: "backend",
    },
    {
      name: "Django",
      icon: django,
      category: "backend",
    },
    {
      name: "Git",
      icon: git,
      category: "tools",
    },
    {
      name: "Postman",
      icon: postman,
      category: "tools",
    },
    {
      name: "Azure DevOps",
      icon: azuredevops,
      category: "tools",
    },
    {
      name: "Jupyter",
      icon: jupyter,
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
      name: "E-commerce",
      description: "In this project, together with team of 4 people, we developed an e-commerce platform where users can browse, filter products, make reviews, login and logout using google API and e-mail confirmation, add them to their cart, and checkout using Paypal payment gateway. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "text-purple-500",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
        {
          name: "postman",
          color: "gray-text-gradient",
        },
      ],
      image: ecommercefutbol,
      source_code_link: "https://github.com/HelloKittyDevelopers/Ecommerce_Back.git",
    },
    {
      name: "Freelance Plataform",
      description: "In this project, together with team of 4 people, we developed an freelance platform where users can browse, filter projects, make reviews, login and logout using google API and e-mail confirmation, add them to their cart, and checkout using Paypal payment gateway. Technologies used: React, NodeJS, PostgreSQL, Django, Postman",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "text-purple-500",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
        {
          name: "postman",
          color: "gray-text-gradient",
        },
      ],
      image: freelance,
      source_code_link: "https://freelancefantasy.netlify.app",
    },
    
    {
      name: "Machine Learning Project",
      description:
        "This research project processes large volumes of data obtained from the Colombian Institute for the Evaluation of Education (ICFES) to create" + 
        "a training model that predicts the global score and analyzes whether various socio-economic factors influence the score.",
      tags: [
        {
          name: "jupyter notebook",
          color: "blue-text-gradient",
        },
        {
          name: "sklearn",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "text-teal-500",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
        {
          name: "seaborn",
          color: "text-purple-500",
        },
      ],
      image: icfesmodel,
      source_code_link: "https://github.com/Geoffrey0pv/Research-project-with-multiple-and-logistic-regression",
    },
    {
      name: "Chessmaster360",
      description:
        "A chess platform designed for chess.com users who " +
        "want to analyze their games played in a day for" +
        "free and also face bots of historical chess players for free."+
        "Technologies used: NestJS, React, MongoDB, Docker and deployment in Azure",
      tags: [
        {
          name: "NestJS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },{
          name: "MongoDB",
          color: "text-purple-500",
        },
        ,{
          name: "Docker",
          color: "text-yellow-500",
        },
      ],
      image: taskproject,
      source_code_link: "https://chessmaster360.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };