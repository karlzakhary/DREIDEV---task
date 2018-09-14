import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, cartRemove, cartAdd}) => {
    return (
        <div>
            <h3>Shopping App</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart_body">
                                {items.map(item => (
                                    <CartItem key={item.id}
                                              price={item.price} title={item.title}
                                              plus={() => cartAdd(item.id)}
                                              minus={() => cartRemove(item.id)}
                                    />

                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart_total">Total: {total} EGP</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    cartRemove: PropTypes.func.isRequired,
    cartAdd: PropTypes.func.isRequired
}

export default Cart;
