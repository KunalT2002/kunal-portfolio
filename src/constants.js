// Skills Section Logo's
import androidStudioLogo from './assets/tech_logo/AndroidStudio.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import ServiceWorkerLogo from './assets/tech_logo/serviceWorkerIcon.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import webStromeLogo from './assets/tech_logo/webStrome.png';

// Experience Section Logo's
import deccanlogicLogo from './assets/company_logo/deccanLogicLogo.jpg';
import IOWeb3Technologies from './assets/company_logo/IOWeb3Technologies.png';

// Education Section Logo's
import SPPUlogo from './assets/education_logo/Savitribai_Phule_Pune_University_Logo.png';
import SRPSlogo from './assets/education_logo/SRPS.jpg';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            {name: 'HTML', logo: htmlLogo},
            {name: 'CSS', logo: cssLogo},
            {name: 'Java Script', logo: javascriptLogo},
            {name: 'React JS', logo: reactjsLogo},
            {name: 'React Native', logo: reactjsLogo},
            {name: 'Redux', logo: reduxLogo},
            {name: 'Material UI', logo: materialuiLogo},
            {name: 'Bootstrap', logo: bootstrapLogo},
            {name: 'Service Worker', logo: ServiceWorkerLogo},
        ],
    },
    {
        title: 'Backend',
        skills: [
            {name: 'Spring boot', logo: springbootLogo},
            {name: 'Node JS', logo: nodejsLogo},
            {name: 'Express JS', logo: expressjsLogo},
            {name: 'MySQL', logo: mysqlLogo},
            {name: 'Postgre SQL', logo: postgreLogo},
        ],
    },
    {
        title: 'Languages',
        skills: [
            {name: 'Java', logo: javaLogo},
            {name: 'Python', logo: pythonLogo},
            {name: 'Java Script', logo: javascriptLogo},
            {name: 'Type Script', logo: typescriptLogo},
        ],
    },
    {
        title: 'Tools',
        skills: [
            {name: 'Git', logo: gitLogo},
            {name: 'GitHub', logo: githubLogo},
            {name: 'VS Code', logo: vscodeLogo},
            {name: 'Postman', logo: postmanLogo},
            {name: 'Web Strome', logo: webStromeLogo},
            {name: 'Android Studio', logo: androidStudioLogo},
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: deccanlogicLogo,
        role: "Fullstack Developer",
        company: "DeccanLogic Private Limited",
        date: "October 2024 - March 2026",
        desc: " Developed and maintained full-stack applications using React and Node.js with PostgreSQL. Designed and optimized RESTful APIs for secure and scalable data exchange. Implemented real-time features using WebSockets and Socket.io for interactive system communication. Built responsive UI components using React and Bootstrap. Improved database query performance and managed schema updates using pgAdmin. Collaborated in Agile teams to deliver production-ready features on schedule. Led issue resolution and coordinated with cross-functional teams for timely bug fixes.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Boostrap",
            "PostgressSQL",
            "Redux",
            "Service Worker",
        ],
    },
    {
        id: 1,
        img: IOWeb3Technologies,
        role: "Fullstack Engineer",
        company: "IOWeb3 Technologies  ",
        date: "April 2023 - Oct 2024",
        desc: "Built the full frontend of DevBoard, a Jira-inspired sprint management platform — implementing Kanban boards, drag-and-drop task reordering, and sprint planning workflows using React.js and TypeScript. Implemented real-time board sync across concurrent users using WebSockets and Socket.io; integrated ServiceWorkers for browser push notifications, replacing a polling-based system. Architected a reusable TypeScript component library with custom React hooks and Redux Toolkit, reducing duplicate code across 15+ views by ~40% and cutting UI bug rate significantly. Applied JWT and RBAC at the UI layer to enforce role-based access across admin, member, and viewer flows; consumed 10+ RESTful APIs and managed source code via Git and GitHub. ",
        skills: [
            "React Native",
            "React",
            "Redux",
            "Node",
            "Express",
            "CSS",
            "SQL",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: SPPUlogo,
        school: "Savitribai Phule Pune University",
        date: "July 2020 - June 2024",
        grade: "8.14 CGPA",
        desc: "Here’s your updated version with the correct university: I have completed my Bachelor of Engineering (BE) in Computer Engineering from Savitribai Phule Pune University. During my academic journey, I developed a strong foundation in core areas of computer science, including programming, data structures, algorithms, and software development. I have studied key subjects such as Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Web Technologies, which helped me build both theoretical understanding and practical skills.",
        degree: "Bachelor of Engineering - Computer Engineering",
    },
    {
        id: 1,
        img: SRPSlogo,
        school: "Sharad Rural Public School, RaghunathNagar",
        date: "June 2019 - March 2020",
        grade: "65%",
        desc: "I completed my Class 12 education from Sharad Rural Public School, Raghunathnagar, under the Maharashtra State Board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "HSC - PCM with Computer Science",
    },
    {
        id: 2,
        img: SRPSlogo,
        school: "Sharad Rural Public School, RaghunathNagar",
        date: "June 2017 - March 2018",
        grade: "82.60%",
        desc: "I completed my Class 10 education from Sharad Rural Public School, Raghunathnagar, under the Maharashtra State Board",
        degree: "SSC",
    },
];

export const projects = [
    {
        id: 0,
        title: "Simplicity-Fintech",
        description:
            "Engineered a full-stack fintech platform supporting SIP, SWP, STP, Switch, Redemption, and Lumpsum investments with NSE integration. Developed secure REST APIs handling 50+ daily financial transactions. Built a React Native mobile app for portfolio tracking and transactions. Implemented real-time chat using WebSockets and Socket.io, along with browser push notifications via Service Workers. Secured workflows using JWT authentication and RBAC, and optimized PostgreSQL schemas for high-volume financial data.",
        // image: fintechLogo,
        tags: ["React JS", "React Native", "Node.js", "PostgreSQL", "WebSockets", "Socket.io"]
    },
    {
        id: 1,
        title: "Evolvus CM-App",
        description:
            "Developed a dynamic customer management application with React and Node.js, enabling automatic frontend updates based on backend data changes. Implemented a multi-step QA workflow for bio-sample validation. Built RESTful APIs for data creation, updates, and QA processes. Managed PostgreSQL database for efficient storage and seamless synchronization.",
        // image: evolvusLogo,
        tags: ["React JS", "Node.js", "PostgreSQL", "REST API"]
    },
    {
        id: 2,
        title: "DevBoard — Developer Sprint & Task Management",
        description:
            "Engineered the full frontend of a Jira-inspired sprint management platform supporting Kanban boards, drag and-drop task reordering, and sprint planning workflows across admin, member, and viewer roles.  Built real-time board sync across concurrent users using WebSockets and Socket.io; integrated ServiceWorkers for browser push notifications replacing a polling-based system. Deployed full-stack application on AWS EC2 behind Nginx via GitHub Actions CI/CD; managed build pipeline, environment variables, S3 file attachments, and production server configuration. ",
        // image: pathwinLogo,
        tags: ["React JS", "Node", "Express", "REST API", "RBAC","SQL"]
    },
    {
        id: 3,
        title: "Algo Trading App",
        description:
            "Developed a full-stack stock analysis and trading platform using Flask and React. Integrated Yahoo Finance API to fetch real-time and historical data for NIFTY 50 stocks. Implemented technical analysis strategies to identify 5–10% profit opportunities within one month and built algorithms to recommend top 3–5 stocks weekly. Designed interactive dashboards for trend and price analysis. Integrated Angel One Smart API for real-time trade execution and optimized data pipelines for multi-stock analysis.",
        // image: algoLogo,
        tags: ["React JS", "Python", "Flask", "Yahoo Finance API", "Angel One API"]
    },
];