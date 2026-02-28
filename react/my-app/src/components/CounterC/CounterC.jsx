import React, {Component} from 'react';

class CounterC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <div>Счетчик сейчас равен: {this.state.count}</div>
                <button onClick={this.handleClick}>Счетчик + 1</button>
            </div>
        );
    }
}

export default CounterC;