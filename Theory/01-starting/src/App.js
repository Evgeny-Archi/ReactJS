import React, { Component } from 'react'
import Car from './Components/Car'

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: '2018'},
            {name: 'Honda', year: '1990'},
            {name: 'Mazda', year: '2010'},
        ],
        pageTitle: 'Cars title'
    }

    changeTitleHandler = (title) => {
        this.setState({
            pageTitle: title
        })
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        const style = {
            textAlign: 'center'
        }
        return (
            <div style={style}>
                <h1>{this.state.pageTitle}</h1>
                <hr />
                <input type="text" onChange={this.handleInput} />

                <button onClick={this.changeTitleHandler.bind(this, 'Title changed')}>Change title</button>

                {this.state.cars.map(item => <Car name={item.name} year={item.year} onChangeTitle={this.changeTitleHandler.bind(this, item.name + ' title')} />)}
            </div>
        )
    }
}

export default App