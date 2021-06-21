import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

export default class BurgerPane extends Component {
    render(){
        return(

<>


<div id="hamburger">
    Burger Stacking Area
    <BurgerStack />
<br></br><button>Clear</button>
</div>


</>
        )
    }
}
