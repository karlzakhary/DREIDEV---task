export default function items(state = []) {
    return state;
}

export function getItems(state, props) {
    return state.items;
}

export function getProduct(state, props) {
    return state.items.find(item => item.id === props.id);
}
