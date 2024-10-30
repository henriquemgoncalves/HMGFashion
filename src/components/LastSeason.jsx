import React from 'react'
import '../styles/components/last.sass'

const LastSeason = () => {
  return (
    <section id='last-season'>
      <div className="container">
        <h1>FALL/WINTER 2024 RUNWAY</h1>
        <button onClick={() => {
          alert("Você clicou no botão!")
        }}>
          SEE LAST SEASON'S SHOW
        </button>
      </div>
    </section>
  )
}

export default LastSeason;