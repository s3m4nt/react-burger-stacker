import React, {Component, useState} from 'react'
import IngredientList from './IngredientList'
import './App.css'
import BurgerPane from './BurgerPane'

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
	{name: 'Animal Style', color: '#ee9b00'}
  ]

const App = (props) => {


const [clickedIngredients, setClickedIngredients] = useState([])

// constructor(props){
//   super()
//   this.state = {
//     clickedIngredients: []
//   }
// }

const addToBurger = (e) => {
	// get value of clicked ingredient and color
	const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
	// create a new array with current clicked ingredient
	const updatedClickedIngredients = clickedIngredients.concat(newIngredient)
	// setState with new clickIngredients array

	setClickedIngredients(updatedClickedIngredients) 
}

const clearBurger = (e) => {
	setClickedIngredients([])
}


		return (
			<div style={{display: "flex", alignItems:"flex-end" }}>
				<IngredientList ingredients={ingredients} addToBurger={addToBurger}/>
				<h1><BurgerPane clickedIngredients={clickedIngredients} clearBurger={clearBurger} /></h1>
			</div>
		)
	}


export default App