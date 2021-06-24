import React, {Component} from 'react'

export default class Ingredient extends Component {
	render (){
		return (
			<p class="windows" style={{backgroundColor: this.props.color}}>
				{this.props.ingredient}
			</p>
		)
	}
}