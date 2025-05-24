import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import IngridientsPopup from './ingridientsPopup'
import './Galery.css'

function Gallery() {

    const [categories, setCategorie] = useState([]);
    const[itemList, setItemList] = useState([]);
    const [clickedMeal, setClickedMeal] = useState(null);
    const [tableData, setTableData] = useState([]);

    const fillTable = (mealData) => {
        const rows = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];
          if (!ingredient || !measure) break;
          rows.push({
            id: i,
            ingredients: ingredient,
            measurements: measure,
          });
        }
        setTableData(rows);
      };
    
        useEffect(() => 
        {
            const getData = async (url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') => 
            {
                try
                {
                    let temp =  await axios(url);   
                    setCategorie(temp.data.meals);
                } 
                catch(error)
                {
                    console.log(error)
                }   
            }
            getData();
        },[])

    const setImageBackground = ((img) => {
        return{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };

    });

    const handleCategoryChange = async (e) => {
    const selected = e.target.value;
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selected;
    try {
      const response = await axios(url);
      setItemList(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };
       
    const handleClick = async(id) => {
        const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
        try{
            const response = await axios(url);
            console.log(response.data.meals);
            const meal = response.data?.meals?.[0];

            if (meal) {
                fillTable(meal);
                setClickedMeal(meal); 
            } else {
            console.log("No meal found for this ID");
            }
        } catch(error)
        {   
            console.log(error)
        }
    }
        

  return (
    <div className='container'>
        <div className='filters'>
            <label htmlFor='category'>Categorie: </label>
            <select id="category" onChange={handleCategoryChange}>
                  <option value = "" selected disabled>Select...</option>
                {
                    categories && categories.map((cat, index) => 
                    {
                        return <option key={index} value={cat.strCategory}>{cat.strCategory}</option>
                    })
                }
                </select> 
        </div>
        <div className='gallery'>
            {   
               itemList && itemList.map((meal, index) =>
                {
                    return <Card 
                    key = {index}
                    style={setImageBackground(meal.strMealThumb)}
                    meal = {meal}
                    onClick = {() => handleClick(meal.idMeal)}
                    />
                })
            }

            {
            clickedMeal && <IngridientsPopup 
                details={clickedMeal}
                onClose={() => setClickedMeal(null)} 
                style={setImageBackground(clickedMeal.strMealThumb)}
                tableData={tableData}
        />
        
            }
        </div>
    </div>
  )
}

export default Gallery