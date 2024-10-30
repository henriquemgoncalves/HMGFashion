import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import '../styles/components/social.sass'

const Social = () => {
  return (
    <section id='social'>
        <div className="container">
            <a href='https://www.github.com/henriquemgoncalves' target='_blank'>
                <FaGithub/>
            </a>
            <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa' target='_blank'>
                <FaLinkedinIn/>
            </a>
            <FaFacebookF/>
            <FaYoutube/>           
        </div>
    </section>
  )
}

export default Social;