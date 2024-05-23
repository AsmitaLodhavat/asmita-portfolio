import { color } from "framer-motion";
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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    java,
    springboot,
    mysql,
    android,
    IOS,
    education,
    hungryhub,
    FurryTales,
    YoutubeClone,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Android Developer",
      icon: backend,
    },
    {
      title: "IOS Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SpringBoot Framework",
      icon: springboot,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Android development",
      icon: android,
    },
    {
      name: "IOS development",
      icon: IOS,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Post Graduate Diploma",
      company_name: "Pune",
      icon: education,
      iconBg: "#E6DEDD",
      date: "September 2023 - February 2024",
      points: [
        "Post Graduate Diploma in Mobile Computing",
        "Institute : Sunbeam Institute Of Information Technology",
        "University : Centre For Development of Advanced Computing",
        "Marks Obtained : 64.57%"
      ],
    },
    {
      title: "Bachelor of Engineering",
      company_name: "Pune",
      icon: education,
      iconBg: "#E6DEDD",
      date: "Septemeber 2019 - July 2022",
      points: [
        "Bachelor of Engineering in Electronics of Telecommunications",
        "Institute : AISSMS Institute of Information Technology",
        "University : Savitribai Phule Pune University",
        "Marks Obtained : 81%"
      ],
    },
    {
      title: "Diploma in Engineering",
      company_name: "Pune",
      icon: education,
      iconBg: "#E6DEDD",
      date: "August 2017 - June 2019",
      points: [
        "Diploma in Information of Technology",
        "Institute : Maeer's MIT Polytechnic",
        "University : Maharashtra state board of Technical Education",
        "Marks Obtained : 66% "
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HungryHub",
      description:"HungryHub, an innovative online food ordering platform, boasts a sleek and responsive UI thanks to React, Tailwind CSS, and Material UI. Its backend, powered by Spring Boot, ensures efficient RESTful API development, complemented by the integration of Stripe payment gateway for seamless transactions. Additionally, with Spring Security implementation, HungryHub prioritizes user data protection, offering peace of mind and enhancing trust in its secure environment.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
        name : "Stripe",
        color: "red-text-gradient",
        }
      ],
      image: hungryhub,
      source_code_link: "https://github.com/AsmitaLodhavat/MyProjects",
    },
    {
      name: "FurryTales",
      description:"Furrytales is a comprehensive e-commerce solution catering to pet owners, featuring a web platform built with React.js and Redux for a user-friendly interface, while the backend is powered by Node.js and Express.js for seamless data management and a native Android mobile app. Offering secure user authentication, efficient product management, and a seamless cross-platform experience, Furrytales showcases my expertise in full-stack web development and Android app development.",
            tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name : "Android",
          color: "red-text-gradient",
          }
      ],
      image: FurryTales,
      source_code_link: "https://github.com/DMCW280421/FurryTales",
    },
    {
      name: "Youtube Clone",
      description:"YouTube Clone Application is a responsive React.js application built with Material UI 5 and integrated with Rapid API for dynamic video content. It features stunning video sections, custom categories, channel pages, and a seamless video playback experience directly within the app. This project highlights my skills in creating user-friendly interfaces, managing state with React, and efficiently fetching and displaying data from external APIs.",
            tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI 5",
          color: "green-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "pink-text-gradient",
        },
        
      ],
      image: YoutubeClone,
      source_code_link: "https://github.com/AsmitaLodhavat/Youtube_Clone",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };