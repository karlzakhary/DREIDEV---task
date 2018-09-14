import { connect } from 'react-redux';
import Item from '../components/Item';
import { mapAddToAction, mapRemoveToAction, isInCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartAdd: (id) => dispatch(mapAddToAction(id)),
    cartRemove: (id) => dispatch(mapRemoveToAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);
