import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  // FaGitAlt,
  FaGithub,
  FaSass,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

export interface Skill {
  id: number;
  name: string;
  level: string;
  icon: React.ReactElement;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    level: "Advanced",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    id: 2,
    name: "CSS",
    level: "Advanced",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    id: 4,
    name: "Sass/SCSS",
    level: "Advanced",
    icon: <FaSass className="text-[#CC6699]" />,
  },
  {
    id: 5,
    name: "Bootstrap",
    level: "Advanced",
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },
  {
    id: 6,
    name: "JavaScript",
    level: "Advanced",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
  },
  {
    id: 7,
    name: "React",
    level: "Intermediate",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    id: 8,
    name: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    id: 9,
    name: "Git & GitHub",
    level: "Intermediate",
    icon: <FaGithub className="text-[#171515]" />,
  },
  {
    id: 10,
    name: "Next.js",
    level: "Intermediate",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
];
