import React from 'react'
import '../styles/components/cards.sass'

const listCards = [
    { id: "1", image: "/img/1.jpg"},
    { id: "2", image: "/img/2.jpg"},
    { id: "3", image: "/img/3.jpg"},
    { id: "4", image: "/img/4.jpg"},
    { id: "5", image: "/img/5.jpg"},
    { id: "6", image: "/img/6.jpg"},
]

const Cards = () => {
  return (
    <div id='cards'>
        {listCards.map((item) => (
            <div className="card" key={item.id}>
                {/* <p>{item.id}</p> */}
                <img src={item.image} alt=''/>
            </div> 
        ))}
         
    </div>
  )
}

export default Cards;