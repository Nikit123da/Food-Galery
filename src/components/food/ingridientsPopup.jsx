import React from 'react'
import './popUp.css'

function IngridientsPopup({ details, onClose }) {
  return (
    <div className="popup">

      <h1>{details.strMeal}</h1>
      <img src={details.strMealThumb} alt={details.strMeal} />
      <div className="instructions">{details.strInstructions}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}


export default IngridientsPopup;