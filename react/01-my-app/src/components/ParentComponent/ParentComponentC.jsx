import React, {Component} from 'react';
import ChildComponentC from "./ChildComponentC/ChildComponentC.jsx";

class ParentComponentC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countMany: [0,0,0]
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleManyClick = (index) => {
        this.setState((prevState) => {
            const newState = [...prevState.countMany];
            newState[index] += 1;
            return {countMany: [...newState]}
        })
    }

    render() {
        return (
            <div>
                <ChildComponentC count={this.state.count} onIncrement={this.handleClick}/>
                <p>Ниже независимые Счетчики</p>
                {this.state.countMany.map((count, index) =>
                    <ChildComponentC count={count} onIncrement={() => {this.handleManyClick(index)}}/>
                )}
            </div>
        );
    }
}

export default ParentComponentC;