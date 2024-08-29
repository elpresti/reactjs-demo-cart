import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

export const CartProvider = ({children}) => {

    const purchasesReducer = (state = initialState, action = {}) => {
        switch(action.type) {
            case '[CART] Add purchase':
                return [...state, action.payload]
            case '[CART] Increment purchase quantity':
                return state.map(item => {
                    const newQty = item.quantity + 1
                    if (item.id === action.payload) return {...item, quantity: newQty}
                    return item
                })
            case '[CART] Decrement purchase quantity':
                return state.map(item => {
                    const newQty = item.quantity - 1
                    if (item.id === action.payload && item.quantity > 1) return {...item, quantity: newQty}
                    return item
                })
            case '[CART] Remove purchase':
                return state.filter(purchase => purchase.id !== action.payload)
            default:
                return state
        }
    }

    const [purchasesList, dispatch] = useReducer(purchasesReducer, initialState)

    const addPurchase = (purchase) => {
        purchase.quantity = 1
        const action = {
            type: '[CART] Add purchase',
            payload: purchase
        }
        dispatch(action)
    }

    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment purchase quantity',
            payload: id
        }
        dispatch(action)
    }

    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement purchase quantity',
            payload: id
        }
        dispatch(action)
    }

    const removePurchase = (id) => {
        const action = {
            type: '[CART] Remove purchase',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CartContext.Provider value={{purchasesList, addPurchase, incrementQuantity, decrementQuantity, removePurchase }}>
            {children}
        </CartContext.Provider>
    )
}
