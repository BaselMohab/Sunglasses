import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, {initialState} from "./reducer";


const StoreContext = createContext()


const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (product) => {
        //current basker which is empty []
        const updatedBasket = state.products;
        updatedBasket.push(product)
        //we push the products to that basket

        totalPrice(updatedBasket);

        dispatch({
            type: 'ADD',
            payload: updatedBasket
        })
    }

    //we passed the product that we want to remove as a parameter
    const remove = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => 
        currentProduct.id !== product.id
        //filter methode iterates over each element in the array of products and check if the currentProduct
        // is not equal to the products that we passed
        )

        totalPrice(updatedBasket);

        dispatch({
            type: 'REMOVE',
            payload:updatedBasket
        })
    }

    const totalPrice = (products) => {
        let total = 0
        //for each price in the product array add it to the total what we initiaed first with 0
        products.forEach(product => {
            total += product.price
        })

        dispatch({
            type: 'GET_TOTAL',
            payload:total
        })
    }

    return (
        <StoreContext.Provider
            value={{
                total: state.total,
                products: state.products,
                add,
                remove,
            }}
    >
        {children}
            </StoreContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(StoreContext)
}

export {StoreContext, AppProvider}