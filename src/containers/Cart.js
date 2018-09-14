import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getTotal, mapRemoveToAction, mapAddToAction } from '../ducks/cart';

const mapStateToProps = (state, props) => {  // What we need to keep track of in each state
    return {
        items: getItems(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartRemove: (id) => dispatch(mapRemoveToAction(id)),
    cartAdd: (id) => dispatch(mapAddToAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
