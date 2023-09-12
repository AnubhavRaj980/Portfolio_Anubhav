import React from 'react';
import {FaGithub, FaLinkedin, FaSalesforce} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anubhav Raj</h4>
      <h4>Copyright &copy; 2023 AR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/AnubhavRaj980" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anubhav-raj-5175851b4/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:anubhav.raj972@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/Anubhav980/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.salesforce.com/trailblazer/a20bce10678" target="_blank"><FaSalesforce/></a>
      </div>
    </footer>
  )
}

export default Footer