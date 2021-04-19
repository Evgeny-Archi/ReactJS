import React, {Component} from 'react'
import Auxiliary from "../hoc/Auxiliary"
import Counter2 from './Counter2/Counter2'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxiliary>
                <Counter2 />
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
    }
}