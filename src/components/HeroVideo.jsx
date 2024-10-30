import React from 'react'
import video from '../assets/fashion.mp4'
import '../styles/components/herovideo.sass'

const HeroVideo = () => {
  return (
    <div id='hero'>
      <video autoPlay muted loop playsInline>
        <source src={video} type='video/mp4'/>
      </video>
    </div>
  )
}

export default HeroVideo;