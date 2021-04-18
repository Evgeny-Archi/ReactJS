import React, { Component, useState } from 'react'
import Car from './Components/Car'

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: '2018'},
            {name: 'Honda', year: '1990'},
            {name: 'Mazda', year: '2010'},
        ],
        pageTitle: 'Cars title',
        showCars: false
    }

    toggleCarsHandler() {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName = (name, index) => {
        const cars = [...this.state.cars]
        cars[index].name = name
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {
        const style = {
            textAlign: 'center'
        }

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, i) => {
                    return (
                        <Car key={i}
                             name={car.name}
                             year={car.year}
                             onChangeName={(event) => this.onChangeName(event.target.value, i)}
                             onDelete={this.deleteHandler.bind(this, i)}
                        />
                    )
                })
        }

        return (
            <div style={style}>
                <h1>{this.state.pageTitle}</h1>
                <hr />
                <button onClick={this.toggleCarsHandler.bind(this)}>Toggle cars</button>
                <div style={{padding: 20, maxWidth: 600, margin: '0 auto'}}>
                    {cars}
                </div>
            </div>
        )
    }
}

export default App
