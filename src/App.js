import React, {Component} from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import BurgerStack from './BurgerStack'


  export default class App extends Component {
      render(){
          return(
              <div id="hamb-container">


<IngredientList/>
<BurgerPane/>



            </div>
        )
    }
}
