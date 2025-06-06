// src/constants/skillsData.js
import { SiJavascript, SiReact } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiHtml5, SiCss3, SiTypescript, SiBootstrap, SiMui } from "react-icons/si"; // أضف أي أيقونات أخرى
import { DiMsqlServer } from "react-icons/di";
export  const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 85
  },
  {
    name: "React",
    icon: SiReact,
    level: 80
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    level: 80
  },

  {
    name: "HTML5",
    icon: SiHtml5,
    level: 90
  },
  {
    name: "CSS3",
    icon: SiCss3,
    level: 90
  },
  {
    name: "SQL Server",
    icon: DiMsqlServer,
    level: 80
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 60
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    level: 70
  },
  {
    name: "Material UI (MUI)",
    icon: SiMui,
    level: 75
  },
  // إضافة المهارات الحالية في مشروع البروفايل
  {
    name: "RESTful API",
    icon: SiReact,
    level: 70  // أو حسب مدى إلمامك
  },
  {
    name: "React Router",
    icon: SiReact,
    level: 75  // إذا كنت قد استخدمته في مشروعك
  },
  {
    name: "Tailwind CSS",
    icon: SiCss3,
    level: 65 // إذا كنت قد جربت
  },
];
    export default skills;