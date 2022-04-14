import { createStore } from "redux"
import products from '../sampledata.json'

function reducer(state = {allProducts:[...products], products:[...products], cart:[]}, action){
    if(action.type === 'menclothing'){
        return {...state, products:[...state.allProducts.filter(prod=>prod.category ===`men's clothing`)]}
    }
    else if(action.type === 'womenclothing'){
        return {...state, products:[...state.allProducts.filter(prod=>prod.category ===`women's clothing`)]}
    }
    else if(action.type === 'electronics'){
        return {...state, products:[...state.allProducts.filter(prod=>prod.category ===`electronics`)]}
    }
    else if(action.type === 'jewelery'){
        return {...state, products:[...state.allProducts.filter(prod=>prod.category ===`jewelery`)]}
    }
    else if(action.type === 'all'){
        return {...state, products:[...state.allProducts]}
    }
    else if(action.type === 'addedToCart'){
        if(state.cart.find(prod=>prod.id === action.payload.id)){
            return {...state, cart:[...state.cart.map(prod =>{
                if(prod.id === action.payload.id){
                    return {...action.payload, quantity:prod.quantity+1}
                }else{
                    return prod
                }
            })]}
        }else{
            return {...state,cart:[...state.cart, {...action.payload,quantity:1}]}
        }
    }
    else if(action.type === 'removedFromCart'){
        return {...state,cart:[...state.cart.filter(prod => prod.id !== action.payload.id)]}
    }
    else if(action.type === 'quantityChange'){
        return {...state,cart:[...state.cart.filter(prod => prod.id !== action.payload.prod.id),{...action.payload.prod,quantity:action.payload.quantity}]}
    }
    return state
}

export let store = createStore(reducer)