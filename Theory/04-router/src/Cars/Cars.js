import React, {Component} from 'react'
import Car from './Car'
import classes from './Cars.module.css'

class Cars extends Component {

    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        const cars = [
            {title: 'Honda', age: 1970},
            {title: 'Ford', age: 2000},
            {title: 'Mazda', age: 1999},
        ]

        return (
            <div style={{width: '80%', textAlign: 'center'}}>
                <button onClick={this.goToHomePage}>Go home</button>
                {cars.map((car, i) => {
                    return (
                        <Car className={classes.Car} title={car.title} year={car.age} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default Cars;