import React from 'react'
import '../styles/components/shop.sass'

const Shop = () => {
  return (
    <section id='shop'>
      <div className="container">
        <h1>HMG FASHION COLLECTION</h1>
        <button onClick={() => {
          alert("Você clicou no botão!")
        }}>
          SHOP NOW
        </button>
      </div>
    </section>
  )
}

export default Shop;