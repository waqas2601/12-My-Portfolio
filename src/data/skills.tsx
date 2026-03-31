import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaSass,
  FaJsSquare,
  FaFigma,
  FaPhp,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiMongoose,
  SiMysql,
} from "react-icons/si";

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
    name: "JavaScript",
    level: "Advanced",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
  },
  {
    id: 4,
    name: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    id: 5,
    name: "Laravel",
    level: "Intermediate",
    icon: <FaLaravel className="text-[#FF2D20]" />,
  },
  {
    id: 6,
    name: "Figma",
    level: "Intermediate",
    icon: <FaFigma className="text-[#F24E1E]" />,
  },

  {
    id: 7,
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    id: 8,
    name: "Sass/SCSS",
    level: "Advanced",
    icon: <FaSass className="text-[#CC6699]" />,
  },
  {
    id: 9,
    name: "Bootstrap",
    level: "Advanced",
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },

  {
    id: 10,
    name: "React",
    level: "Advanced",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    id: 11,
    name: "Redux",
    level: "Advanced",
    icon: <SiRedux className="text-[#764ABC]" />,
  },
  {
    id: 12,
    name: "Next.js",
    level: "Advanced",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    id: 13,
    name: "MongoDB",
    level: "Intermediate",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    id: 14,
    name: "Mongoose",
    level: "Intermediate",
    icon: <SiMongoose className="text-[#880000]" />,
  },

  {
    id: 15,
    name: "PHP",
    level: "Intermediate",
    icon: <FaPhp className="text-[#777BB4]" />,
  },
  {
    id: 16,
    name: "MySQL",
    level: "Intermediate",
    icon: <SiMysql className="text-[#00758F]" />,
  },
  {
    id: 17,
    name: "Git",
    level: "Intermediate",
    icon: <FaGitAlt className="text-[#F05032]" />,
  },
  {
    id: 18,
    name: "GitHub",
    level: "Intermediate",
    icon: <FaGithub className="text-[#171515]" />,
  },
];
