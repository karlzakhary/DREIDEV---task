import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ title, price, plus, minus }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="button_cart_add" onClick={plus}>+</button>
                <button className="button_cart_remove" onClick={minus}>-</button>
                <span className="cart_item_name">{title}</span>
            </div>
            <div className="cart_item_price">{price} EGP</div>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    plus: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired

}

export default CartItem;
