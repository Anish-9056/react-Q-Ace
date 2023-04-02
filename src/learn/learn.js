import React, { Component } from 'react'

export default class Learn extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    render() {
        const { name } = this.props
        return (
            <div>learn {this.state.counter} {name}
                <button type="text" onClick={() => this.increment()}>click</button>
                <button type="text" onClick={this.increment}>class event handle</button>
            </div>
        )
    }
}
