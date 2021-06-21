import React from 'react'

export default function Ingredient(props) {
    return (
        <div style={{ backgroundColor: props.color }}>
            {props.name}
       
        </div>
    )
}
