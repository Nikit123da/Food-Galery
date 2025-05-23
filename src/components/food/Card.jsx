import React from 'react'
import './card.css'

function Card({meal, onClick, style}) 
{
  return (
    <div className='card' id = {meal.idMeal} onClick={onClick} style={style}>
        <h2>{meal.strMeal}</h2>
    </div>
  )
}

export default Card