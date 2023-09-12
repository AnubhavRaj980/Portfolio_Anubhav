import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiVercel, SiCanva, SiAdobephotoshop} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Java: <FaJava/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Photoshop: <SiAdobephotoshop/>,
        Npm : <FaNpm/>,
        Canva: <SiCanva/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
