import React from 'react'
import '../styles/components/credits.sass'

const left = [
  {occupation: "SHOW DIRECTION AND PRODUCTION", name: "XXX XXXXXX"},
  {occupation: "STYLIST", name: "XXXX XXX"},
  {occupation: "MAKEUP", name: "XXXXX XX"},
  {occupation: "NAILS", name: "XXXXX XXXXXX"},
]

const right = [
  {occupation: "VIDEO", name: "XXXXX XXXX"},
  {occupation: "MUSIC DIRECTOR", name: "XXXXXXXX"},
  {occupation: "HAIR", name: "XXXXXXX XXXXXXX"},
  {occupation: "CASTING", name: "XXXXXXX X"},
]

const Credits = () => {
  return (
    <div id='credits'>
      <h3>CREDITS</h3>
        <div className="pages">
          <div className="page1">
            <div className="info-left">
              {left.map((item) => (
                <div>
                  <p>{item.occupation}</p>
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>

            <div className='info-right'>
              {right.map((item) => (
                <div>
                  <p>{item.occupation}</p>
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      <p className='pagination'>1 / 2</p> 
      </div>
  )
}

export default Credits;