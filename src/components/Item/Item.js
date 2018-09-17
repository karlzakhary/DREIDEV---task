import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    
    addClick = () => {
        const { id , cartAdd} = this.props;
        cartAdd(id)
    } ;

    removeClick = () => {
        const { id ,  cartRemove} = this.props;
        cartRemove(id)
    } ;

    render() {
        const { title, price, image, description, isInCart } = this.props;

        return (
            <div className="item thumbnail">
                <img src={image} alt="item" />
                <div className="caption">
                    <h3>{title}</h3>
                    <div className="item_price">{price} EGP </div>
                    <div className="item_description">{description} </div>

                    <div className="item_button_wrapper">

                        <button
                            type="button" className="button_add"
                            onClick={this.addClick}
                        > + </button>
                        <button
                            className={isInCart ? 'button_remove' :'invisible_button'}
                            onClick={this.removeClick}
                        > - </button>
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    cartAdd: PropTypes.func.isRequired,
    cartRemove: PropTypes.func.isRequired,
}

export default Item;
