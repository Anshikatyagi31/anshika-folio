import { type StaticImageData } from "next/image";
import timepass from "/public/img/projects/timepass.png";
import botbyte from "/public/img/projects/botbyte.jpeg";
import foliageThumb from "/public/img/projects/foliage.jpg";

export type Project = {
  subtitle: string;
  image: StaticImageData;
  description: string;
  projectTitle: string;
  year: number;
  role: string;
  techs: string;
  url: string;
  // shineColor: string[];
};

export const projects: Project[] = [
  {
    projectTitle: "botbyte",
    description: "a chatbot you can embed in your website.",
    subtitle:
      "Reached over 100k+ unique users and generated 340.5k+ page visits. Attained 20K users in less than a week during the initial launch.",
    image: botbyte,
    year: 2024,
    role: "Front-End Engineer, UI/UX Design",
    techs: "React, Typescript, Next.js, Tailwind, Drizzle, and GraphQL.",
    url: "https://botbyte.in",
    // shineColor: ["#f51aa6", "#4f0835"],
  },
  {
    projectTitle: "timepass.wtf",
    description: "Play, Challenge, Code, Timepass",
    subtitle:
      "Discover a world of casual games designed to entertain, challenge, and help you pass time. From classic Tic-Tac-Toe to brain-teasing Memory Games.",
    image: timepass,
    year: 2025,
    role: "Front-End & Design Engineer",
    techs: "React, Typescript, Next.js, Tailwind, and GSAP.",
    url: "https://timepass-wtf.vercel.app/",
    // shineColor: ["#28af66", "#15422c"],
  },
  {
    projectTitle: "foliage",
    description:
      "is an experimental e-commerce website design for luxurious plants.",
    subtitle:
      "Excels in crafting clean and interactive websites, seamlessly blending minimalist design with modern technology for exceptional user experiences.",
    image: foliageThumb,
    year: 2023,
    role: "UI/UX Design, Front-End Engineer",
    techs: "React, Typescript, Next.js, Tailwind, and GSAP.",
    url: "https://foliage.omsimos.com",
    // shineColor: ["#656a74", "#273245"],
  },
];
