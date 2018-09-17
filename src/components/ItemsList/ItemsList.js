import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../containers/Item';

const ItemsList = ({ items }) => {
    return (
        <div>
            <h3>Available Items</h3>
            <ul className="items">
              {items.map(item => (
                  <li key={item.id} className="items_single_item">
                    <Item id = {item.id}
                          title = {item.title}
                          price = {item.price}
                          image = {item.image}
                          description = {item.description}
                          isInCart = {item.isInCart} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ItemsList.propTypes = {
    items: PropTypes.array,
}

export default ItemsList;
