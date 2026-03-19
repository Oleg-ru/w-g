export const initialState = {
    count: 0,
    prev: 'Я тут!!!'
};

export function counterReducer(state, action) {
    console.log('Action -> ', action);
    console.log('State -> ', state)
    switch (action.type) {
        case 'SET_VALUE': {
            return {
                ...state,
                count: action.payload
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                count: initialState.count
            }
        }
        default:
            return state;

    }
}