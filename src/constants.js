// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.jpg';
import agcLogo from './assets/company_logo/agc_logo.jpg';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.jpeg';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: newtonschoolLogo,
      role: "Intern",
      company: "CFEES, DRDO",
      date: "February 2025 - June 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "ReactJs",
        "MongoDb",
        "NodeJs",
        "ExpressJs",
        "Javascript",
        "Tailwind CSS",
         "Postman",
      ],
    },
    {
      id: 1,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "SGCA Technologies",
      date: "January 2025 - May 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "Bootstrap",
        "MongoDb",
        
      ],
    },
    {
      id: 2,
      img: agcLogo,
      role: "Web Development",
      company: "Zidio Development",
      date: "July 204 - September 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, NodeJS, ExpressJS, MOngoDB and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "MongoDb",
        "NodeJs",
        "ExpressJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    
  ];
  
  // export const education = [
  //   {
  //     id: 0,
  //     img: glaLogo,
  //     school: "GLA University, Mathura",
  //     date: "Sept 2022 - July 2024",
  //     grade: "7.81 CGPA",
  //     desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //     degree: "Master of Computer Applications - MCA",
  //   },
  //   {
  //     id: 1,
  //     img: bsaLogo,
  //     school: "BSA College, Mathura",
  //     date: "Sept 2018 - Aug 2021",
  //     grade: "73.2%",
  //     desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //     degree: "Bachelor of Science - BSC (Computer Science)",
  //   },
  //   {
  //     id: 2,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2017 - March 2018",
  //     grade: "78%",
  //     desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //     degree: "CBSE(XII) - PCM with Computer Science",
  //   },
  //   {
  //     id: 3,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },
  // ];
  
  export const projects = [
    {
      id: 0,
      title: "Chat-Box",
      description:
        "A real-time chat feature built with the MERN stack and Socket.io, allowing users to communicate instantly while using the platform. It supports one-on-one or group chats, along with document file sharing (PDFs, notes, etc.), enabling users to exchange study materials and get help in a collaborative learning environment.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Node JS", "Express Js", "MongoDb", "TailwindCss", "Postman"],
      github: "https://github.com/mk4727/Chatty",
      webapp: "https://new-12l1.onrender.com/",
    },
    {
      id: 1,
      title: "Ecommerce-Using-Typscript ",
      description:
        "A React TypeScript-based dynamic e-commerce website featuring advanced filtering capabilities. Users can browse products using multiple filters like category, price, and rating. The system ensures efficient rendering, type safety, and real-time updates for a seamless shopping experience.",
      image: csprepLogo,
      tags: ["React", "Tyscript", "Tailwind Css", "API", "HTML", "CSS"],
      github: "https://github.com/mk4727/Ecommerce-Using-Typscript",
      webapp: "https://testing-deployment-eta.vercel.app/",
    },
    {
      id: 2,
      title: "SGCA",
      description:
        "A dynamic live website developed for SGCA using modern web technologies. It features real-time content updates, responsive design, and an intuitive admin panel for managing events, blogs, and team details, ensuring the platform remains engaging, up-to-date, and user-friendly.",
      image: movierecLogo,
      tags: ["React", "API", "HTML", "CSS", "Typescript" ,"Tailwind Css"],
      github: "https://github.com/mk4727/SGCA-/tree/main/SGCA",
      webapp: "https://sgca-six.vercel.app/",
    },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    {
      id: 5,
      title: "Dynamic",
      description:
        "A dynamic e-commerce website designed for selling educational courses. It features user authentication, interactive course listings, and a content management system that allows administrators to add, update, or remove courses without modifying the codebase.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node JS", "Express JS", "MongoDB", "EJS"],
      github: "https://github.com/mk4727/Dynamic",
      webapp: "https://dynamic-4.onrender.com/",
    },
    {
      id: 6,
      title: "Amazon Clone",
      description:
        "An e-commerce web application that replicates core Amazon functionalities, including product listings, a responsive user interface, shopping cart features, and navigation menus. Built using HTML, CSS, and JavaScript to simulate a real-world online shopping experience with a focus on layout design, interactivity, and UI responsiveness.",
      image: cmLogo,
      tags: ["Html", "Css", "Javascript"],
      github: "https://github.com/mk4727/Amazon-Clone",
      webapp: "https://amazon-03yg.onrender.com/",
    },
    {
      id: 7,
      title: "lagunitas",
      description:
        "“Liqure is a sleek and user-friendly web platform designed for liquor enthusiasts to explore, learn about, and shop for a wide range of alcoholic beverages. The site offers detailed product listings, cocktail recipes, brand stories, and age-verified browsing. Built using HTML, CSS, and JavaScript, it features an elegant design, interactive UI components, and smooth navigation for an engaging shopping experience. The platform also supports a secure checkout process and responsive design for mobile and desktop users alike.”",
      image: imagesearchLogo,
     tags: [ "HTML", "CSS", "Javascript"],
      github: "https://github.com/mk4727/Lagunitas-Frontend-Website",
      webapp: "https://lagunitas-frontend-website.onrender.com/",
    },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: [ "HTML", "CSS", "Javascript", "React Js", "API", "Image Processing"], 
    //   github: "https://github.com/mk4727/Image-Background-Remover",
    //   webapp: "https://image-background-remover-1.onrender.com",
    // },
  ];  
