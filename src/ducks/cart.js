import { getProduct } from './items';

// actions
const CART_ADD   = 'cart_ADD';
const CART_REMOVE = 'cart_REMOVE';

// reducer
const initialState = {
    items: []
};

export default function cartReducer(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return cartAdd(state, action.payload);
        case CART_REMOVE:
            return cartRemove(state, action.payload);
        default:
            return state;
    }
}

function cartAdd(state, payload) {
    //state.items.push(payload.productId);
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}



function cartRemove(state, payload) {
    var index = state.items.indexOf(payload.productId);
    //console.log(state.items[state.items.indexOf(payload.productId)].title);
    state.items.splice(index,1);
    return {
        ...state,
        items:state.items

};
}


// action creators
export function mapAddToAction(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function mapRemoveToAction(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}


export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
