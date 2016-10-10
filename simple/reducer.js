export default function(state, action) {
    switch(action.type) {
        case 'AGE':
            return {
                ...state,
                age: action.payload
            }
    }

    return state;
}
