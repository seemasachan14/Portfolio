import CppLogo from "../src/Resources/Homepage/Skills/CppLogo.png";

import CssLogo from "../src/Resources/Homepage/Skills/CssLogo.png";
import HtmlLogo from "../src/Resources/Homepage/Skills/HtmlLogo.png";
import JavaScriptLogo from "../src/Resources/Homepage/Skills/JavaScriptLogo.png";
import MongoDBLogo from "../src/Resources/Homepage/Skills/MongoDBLogo.png";
import MYSQLLogo from "../src/Resources/Homepage/Skills/MySQLLogo.png";
import NodeJsLogo from "../src/Resources/Homepage/Skills/NodeJsLogo.png";
import ReactJSLogo from "../src/Resources/Homepage/Skills/ReactJsLogo.png";
import education10 from "../src/Resources/Homepage/Education/education10.gif";
import education12 from "../src/Resources/Homepage/Education/education12.gif";
import educationBtech from "../src/Resources/Homepage/Education/educationBtech.gif";
import GoogleDevelopersLogo from "../src/Resources/Homepage/Work/googleDevelopersLogo.png";
import ducatLogo from "../src/Resources/Homepage/Work/ducatLogo.png";



// this is skills data 
export const skillsData= [
    {
      title: "C++",
      image: CppLogo,
    },
    {
      title: "Html",
      image: HtmlLogo,
    },
    {
      title: "Css",
      image: CssLogo,
    },
    {
      title: "JavaScript",
      image: JavaScriptLogo,
    },
    
    {
      title: "React.Js",
      image: ReactJSLogo,
    },
    {
      title: "Node.js",
      image: NodeJsLogo,
    },
    {
      title: "MongoDb",
      image: MongoDBLogo,
    },
    {
      title: "MySQL",
      image: MYSQLLogo,
    },
  ];


// this is data related to education 
export const  educationData = [
    {
      qualification: "Bachelor's of Technology",
      tenure: "2019-2023",
      description:
        "I graduated with distinction in Engineering, demonstrating a profound understanding of computer science concepts. Throughout my studies, I immersed myself in various aspects of the field, equipping me with a solid foundation for pursuing excellence in technology and innovation.",
      marks: "77.7",
      college: "Krishna Institute of Technology, Kanpur",
      image: educationBtech,
    },
    {
      qualification: "12th/HSC",
      tenure: "2018-2019",
      description:
        "In my 12th-grade pursuits, I demonstrated adeptness in various disciplines, ranging from the complexities of physics and chemistry to the intricacies of mathematics and literature. This comprehensive exposure fostered a deep appreciation for scientific inquiry, instilling in me a commitment to academic excellence and lifelong learning.",
      marks: "70",
      college: "G.I.C.Pukhrayan, Kanpur Dehat",
      image: education12,
    },
    {
      qualification: "10th/SSC",
      tenure: "2016-2017",
      description:
        "In 10th grade, my academic journey was marked by proficiency across a diverse array of subjects, encompassing the foundational principles of science, mathematics, and language arts. This period laid a robust groundwork, nurturing my curiosity for scientific exploration and setting the stage for advanced studies.",
      marks: "80",
      college: "G.I.C.Pukhrayan, Kanpur Dehat",
      image: education10,
    },
  ];


// this is data related to work 

export const workData= [
    {
      position: "Intern",
      tenure: "July'2022-Sep'2022",
      organization: "Ducat Training School",
      description: `Got training from Ducat Training School in UX/UI development.`,
      image: ducatLogo,
    },
    {
      position: "Intern",
      tenure: "Aug'2022-Oct'2022",
      organization: "SmartInternz X Google Developers",
      description: `Did Virtual Internship on Android Development using Kotlin powered by Google Developer for 8 weeks. `,
      image: GoogleDevelopersLogo,
    },
  ];
  


// this is the data related to the projects made by me 

export const projectsData=[
    {
        title:"DSA Helper",
        genre:"Educational Portal",
        description:"An educational portal providing a vast repository of learning resources, personalized learning pathways, interactive tools,and progress tracking to empower students to achieve their academic goals. Comprising an extensive repository of meticulously curated learning resources, catering to diverse learning styles and academic needs.",
        link:"https://dsa-helper-frontend-rishabhk5236.vercel.app/login-signup",
        technologyUsed:"MongoDB,React.JS,Node.JS,HTML,CSS,JavaScript",
        screenShots:"https://drive.google.com/drive/folders/1hJ2DeH4Wq1tI6qfnphjMUdV0q8CdpicV?usp=sharing"
    },
    {
        title:"Vocabian",
        genre:"Academic Excellence Application",
        description:"Build your vocabulary and communication skills with this engaging Android app. Learn 500+ words and play fun games to improve your English.Immerse Yourself in a captivating learning environment.",
        link:"https://drive.google.com/file/d/1sMqEqge4LTrVIQwx87XvSkQgsAYw8CVl/view?usp=drive_link",
        technologyUsed:"Android Development,Kotlin,Room Database,XML",
        screenShots:"https://drive.google.com/drive/folders/1YYPxms2Z9pf0Wp3nnK5fFfRcSnjOa8--?usp=sharing"
    },
    {
        title:"Textanion",
        genre:"Text Editor",
        description:"Elevate your text with this comprehensive tool that extracts emails, encodes, decodes, and converts cases, ensuring your writing is polished and refined.Unleash the potential of this comprehensive tool to refine your writing, elevating your communication to new heights of clarity and precision.",
        link:"https://textanion-rishabhk5236.vercel.app/",
        technologyUsed:"React.JS,HTML,CSS,JavaScript",
        screenShots:"https://drive.google.com/drive/folders/15jcCW8WB1dbdzNYESxl6_gRe6hdxQd6e?usp=sharing"
    }
]