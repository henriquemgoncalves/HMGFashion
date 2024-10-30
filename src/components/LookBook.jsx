import React from 'react'
import Cards from './Cards';
import '../styles/components/lookbook.sass'

const LookBook = () => {
  return (
    <section id='look'>
      <h3>LOOKBOOK</h3>
      <div className="cards">
        <Cards/>
      </div>
      <button>
        SEE ALL THE LOOKS
      </button>
    </section>
  )
}

export default LookBook;