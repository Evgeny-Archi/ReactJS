import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1 style={{color: 'red'}}>Something gone wrong</h1>
            )
        } else {
            return this.props.children
        }
    }
}