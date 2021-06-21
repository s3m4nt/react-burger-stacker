import React, { Component } from 'react'
import Ingredient from './Ingredient'

const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'},
    {name: 'Pickle', color: 'green'},
    {name: 'Yellow Pepper', color: 'yellow'}
  ]

  export default class IngredientList extends Component {
    render(){

        const allIngredients = ingredients.map((ingr,index)=>{
return <Ingredient name={ingr.name} color={ingr.color}/>

        })

        return(

<>

<div id="ingredients">
<p>Ingredients here</p>
{allIngredients}
</div>

</>

        )
    }
}



