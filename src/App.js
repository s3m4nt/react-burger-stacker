import React, {Component} from 'react'
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
	{name: 'Onion', color: 'lightyellow'}
  ]

export default class App extends Component {

constructor(props){
  super()
  this.state = {
    clickedIngredients: []
  }
}

addToBurger = (e) => {
	// get value of clicked ingredient and color
	const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
	// create a new array with current clicked ingredient
	const updatedClickedIngredients = this.state.clickedIngredients.concat(newIngredient)
	// setState with new clickIngredients array
	this.setState({
		clickedIngredients: updatedClickedIngredients
	})
}

clearBurger = (e) => {
	this.setState({
		clickedIngredients: []
	})
}

	render (){
		return (
			<div style={{display: "flex", alignItems:"flex-end" }}>
				<IngredientList ingredients={ingredients} addToBurger={this.addToBurger}/>
				<h1><BurgerPane clickedIngredients={this.state.clickedIngredients} clearBurger={this.clearBurger} /></h1>
			</div>
		)
	}
}