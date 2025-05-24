import React from 'react'
import './popUp.css'

function IngridientsPopup({ details, onClose, style, tableData }) {
  return (
    <div className="popup" onClick={onClose}>
      <h1>{details.strMeal}</h1>
      <div className="innerPopup" style={style}>
        <div className='tableOuter'>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ingredient</th>
                  <th>Measurement</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.ingredients}</td>
                    <td>{row.measurements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        
        <div className="instructions">
          <p>{details.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}



export default IngridientsPopup;