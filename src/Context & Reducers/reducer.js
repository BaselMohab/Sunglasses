export const initialState = {
    total: 0,
    products: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD': 
        return {
            ...state, products: action.payload
        }

        case 'REMOVE': 
        return {
            ...state, products: action.payload
        }

        case 'GET_TOTAL':
        return {
            ...state, total: action.payload
        }
        default: throw Error("Cannot match case in reducer")
    }
}

export default reducer;