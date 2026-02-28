// import React, {Component} from 'react';
//
// class ChildComponentC extends Component {
//     render() {
//
//         const {count, onIncrement} = this.props;
//        
//         return (
//             <div>
//                 <p>Счетчик внутри дочери: {count}</p>
//                 <button onClick={onIncrement}>Жмяк счетчик внутри дочери</button>
//             </div>
//         );
//     }
// }
//
// export default ChildComponentC;

// Функциолнальнй компонент 

import React from 'react';

function ChildComponentC(props) {
    return (
        <div>
            <h3>Я функциональный компонент</h3>
            <p>Счетчик внутри дочери: {props.count}</p>
            <button onClick={props.onIncrement}>Жмяк счетчик внутри дочери</button>
        </div>
    );
}

export default ChildComponentC;