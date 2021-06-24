import React, {Component} from 'react'
export default class ClearBurger extends Component {
    render() {
        return (
            <button onClick={(e) => this.props.clearBurger(e)}>
                clear burger stack
            </button>
        )

    }
}