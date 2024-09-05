import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

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
    description: `Computer Science. \nGPA: 3.86/4.00`,
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
    title: "Rideshare",
    image: project1,
    description:
      "A ride sharing mobile app",
    technologies: ["Flutter", "Firebase", "Google Maps Api"],
    githubLink: "https://github.com/adem299/RideShare",
  },
  {
    title: "Lendy",
    image: project2,
    description:
    "A p2p lending application to help UMKM get funding easily",
    technologies: ["Flutter", "Python", "FastAPI"],
    githubLink: "https://github.com/adem299/TubesProvisKel4/tree/main/LendyV3",
  },
  {
    title: "Signlogy",
    image: project3,
    description:
    "A mobile application for realtime sign language interpretation",
    technologies: ["Kotlin", "Flask", "Google Cloud", "Python"],
    githubLink: "https://github.com/Signology",
  },
  {
    title: "SISPEK13",
    image: project4,
    description:
    "A website built for information purposes about the student organization at SMKN 13 Bandung.",
    technologies: ["Laravel", "CSS", "Javascript"],
    githubLink: "https://github.com/adem299/SISPEK13-Ver.1",
  },
  {
    title: "MOTOOM",
    image: project5,
    description:
    "The website allows users to view real-time soil moisture data, enabling them to determine whether their plants need watering.",
    technologies: ["PHP", "Arduino", "Bootstrap", "SCSS"],
    githubLink: "https://github.com/adem299/MOTOOM",
  },
];

export const CONTACT = {
  address: "Bandung, West Java, Indonesia",
  phoneNo: "+6289 6300 48231",
  email: "mulyanaade30@gmail.com",
};
