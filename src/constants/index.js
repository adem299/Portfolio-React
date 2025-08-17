import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `I am an undergraduate computer science student with strong passionate in software developer fields especially in mobile development and web development.`;

export const ABOUT_TEXT = `I am a passionate Software Developer with solid experience in both web and mobile development. I am continuously refining my skills in creating responsive, user-friendly websites and mobile applications that provide exceptional user experiences. I specialize in leveraging modern web technologies, frameworks, and mobile platforms to build solutions that cater to the needs of both users and businesses. Always eager to learn new things, I enjoy applying my problem-solving and analytical skills to transform complex ideas into practical, effective software solutions.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Jun 2023",
    role: "Teaching Assistant",
    company: "Universitas Pendidikan Indonesia.",
    description: `Taught practicum classes for Visual Mobile Programming courses with a total of approximately 80 students.`,
    technologies: ["Flutter", "Dart", "FastAPI"],
  },
  {
    year: "Feb 2023 - Jun 2023",
    role: "Web Developer",
    company: "SMKN 13 Bandung",
    description: `Developing a student organization school profile website using Laravel framework.`,
    technologies: ["HTML", "CSS", "Laravel"],
  },
];

export const EDUCATION = [
  {
    year: "Sep 2021 - Present",
    school: "Universitas Pendidikan Indonesia",
    address: "Bandung, Indonesia",
    description: `Computer Science. \nGPA: 3.87/4.00`,
  },
  {
    year: "Aug 2023 - Jan 2024",
    school: "Bangkit Academy",
    address: "Bandung, Indonesia",
    description: `Mobile Development Cohort`,
  },
];

export const PROJECTS = [
  {
    title: "TOEFLify",
    image: project1,
    description:
      "A Generative AI-based web application designed to help users prepare for the TOEFL exam by providing personalized practice tests, vocabulary exercises, and performance tracking. I contributed as a Frontend Developer, responsible for building the user interface with React.js and Tailwind CSS, ensuring a responsive design and smooth user experience, while using Vite for fast and efficient development.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/TOEFLify",
  },
  {
    title: "KostHub",
    image: project7,
    description:
      "A web application for boarding house (kost) search in Bandung, integrated with AI features such as a chatbot for user assistance and price prediction for better decision-making. I contributed as a Frontend Developer and UI/UX Designer, responsible for creating responsive and intuitive user interfaces using React.js and Tailwind CSS, while ensuring seamless user experience and efficient interaction with backend services.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/TOEFLify",
  },
  {
    title: "Silela",
    image: project6,
    description:
      "A mobile application that enables residents of Isola to request and manage official administrative letters online, simplifying the document submission and verification process. I contributed as a Fullstack Mobile Developer, responsible for designing the database schema, building and integrating the backend using FastAPI and MySQL, and developing the mobile frontend with Flutter to ensure a seamless user experience.",
    technologies: ["Flutter", "FastAPI", "MySQL"],
    githubLink: "https://github.com/SIPELO",
  },
  {
    title: "Rideshare",
    image: project1,
    description:
      "A mobile application that connects drivers and passengers heading to the same destination to reduce transportation costs. I was responsible for designing the app architecture using MVVM, developing the frontend with Flutter, and integrating Firebase for authentication, Firestore for real-time data, and Google Maps API for navigation.",
    technologies: ["Flutter", "Firebase", "Google Maps Api"],
    githubLink: "https://github.com/adem299/RideShare",
  },
  {
    title: "Lendy",
    image: project2,
    description:
    "A peer-to-peer lending application designed to connect small businesses (UMKM) with lenders, enabling them to access funding more easily. I was responsible for building the cross-platform mobile app using Flutter, implementing API integration with FastAPI, and managing authentication and data storage for secure transactions.",
    technologies: ["Flutter", "Python", "FastAPI"],
    githubLink: "https://github.com/adem299/TubesProvisKel4/tree/main/LendyV3",
  },
  {
    title: "Signlogy",
    image: project3,
    description:
    "A mobile application for real-time sign language interpretation to improve communication accessibility for the hearing impaired. I contributed as a Mobile Developer and UI/UX Designer, responsible for building the Android app using Kotlin, designing intuitive user interfaces, and ensuring smooth interaction with the backend powered by Flask, Python, and Google Cloud services.",
    technologies: ["Kotlin", "Flask", "Google Cloud", "Python"],
    githubLink: "https://github.com/Signology",
  },
  {
    title: "SISPEK13",
    image: project4,
    description:
    "A website developed to provide information about student organizations at SMKN 13 Bandung, making it easier for students and the community to access the latest activities and updates. I contributed as a Frontend Developer, responsible for building responsive user interfaces using Laravel Blade, JavaScript, and CSS to ensure a clean and accessible design.",
    technologies: ["Laravel", "CSS", "Javascript"],
    githubLink: "https://github.com/adem299/SISPEK13-Ver.1",
  },
  {
    title: "MOTOOM",
    image: project5,
    description:
    "A website that displays real-time soil moisture data from IoT sensors, helping users determine whether their plants need watering. I contributed as a Frontend Developer, responsible for implementing responsive layouts and interactive UI components using Bootstrap and SCSS, while ensuring smooth data visualization from the backend and Arduino integration.",
    technologies: ["PHP", "Arduino", "Bootstrap", "SCSS"],
    githubLink: "https://github.com/adem299/MOTOOM",
  },
];

export const CONTACT = {
  address: "Bandung, West Java, Indonesia",
  phoneNo: "+6289 6300 48231",
  email: "mulyanaade30@gmail.com",
};
