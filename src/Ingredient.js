import React from 'react'

const Ingredient = (props) => {

		return (
			<p class="windows" style={{backgroundColor: props.color}}>
				{props.ingredient}
			</p>
		)
	}

	export default Ingredient