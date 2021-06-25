import React from 'react'

const ClearBurger = (props) => {

        return (
            <div>
            <br/><br/>
            <button onClick={(e) => props.clearBurger(e)}>
                clear burger stack
            </button>
            </div>
        )
}

export default ClearBurger