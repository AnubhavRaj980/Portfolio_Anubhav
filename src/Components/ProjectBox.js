import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap.",
    TindogGithub : "https://github.com/AnubhavRaj980/Tindog",
    TindogWebsite : "https://tindog-steel-gamma.vercel.app/",

    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems.",
    RogFreeGithub : "https://github.com/AnubhavRaj980/Yoga-Free/tree/main",
    RogFreeWebsite : "https://yoga-free.vercel.app/",

    Secrets_WebSocialAppDesc: "Dive into a world of laughter and intrigue with Secrets_WebSocialApp, where you'll uncover and share the most side-splitting secrets from across the web, all in one place.",
    Secrets_WebSocialAppGithub:"https://github.com/AnubhavRaj980/Secrets_WebSocialApp",
    Secrets_WebSocialAppWebsite:"https://secrets-social.onrender.com/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox